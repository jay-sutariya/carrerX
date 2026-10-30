import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { seedResources } from './seedResources';

const prisma = new PrismaClient();

async function main() {
  await seedResources(prisma);

  const email = process.env.MANAGER_EMAIL?.trim().toLowerCase();
  const password = process.env.MANAGER_PASSWORD;
  if (Boolean(email) !== Boolean(password)) {
    throw new Error('Set both MANAGER_EMAIL and MANAGER_PASSWORD, or neither.');
  }
  if (!email || !password) return;
  if (password.length < 12) {
    throw new Error('MANAGER_PASSWORD must be at least 12 characters.');
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing && existing.role !== 'manager') {
    throw new Error('MANAGER_EMAIL belongs to an existing student account.');
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: {
      email,
      name: 'CareerX Manager',
      passwordHash,
      role: 'manager',
    },
  });
}

main()
  .catch((error) => {
    console.error('Production seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
