if (process.env.VERCEL) {
  const databaseUrl = process.env.DATABASE_URL;
  const directUrl = process.env.DATABASE_URL_UNPOOLED;
  const jwtSecret = process.env.JWT_SECRET;

  if (!databaseUrl || !/^postgres(ql)?:\/\//.test(databaseUrl)) {
    throw new Error('Vercel deployment requires a PostgreSQL DATABASE_URL');
  }
  if (!directUrl || !/^postgres(ql)?:\/\//.test(directUrl)) {
    throw new Error('Vercel deployment requires a PostgreSQL DATABASE_URL_UNPOOLED');
  }
  if (!jwtSecret || jwtSecret.length < 32 || jwtSecret === 'careerx_super_secret_production_jwt_key_2026_secure') {
    throw new Error('Vercel deployment requires a unique JWT_SECRET of at least 32 characters');
  }
}
