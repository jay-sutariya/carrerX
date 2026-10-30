# Deploy CareerX to Vercel

CareerX requires a persistent PostgreSQL database. The committed `prisma/dev.db` is old local demo data and is excluded from Vercel uploads.

1. Link this directory to the intended Vercel project and verify its owner and project name with `vercel project inspect --non-interactive`.
2. Provision PostgreSQL for that project, such as Neon through the Vercel Marketplace. Set `DATABASE_URL` to its pooled PostgreSQL connection string and `DATABASE_URL_UNPOOLED` to its direct connection string for Production and Preview.
3. Set `JWT_SECRET` for Production and Preview to a unique value from `openssl rand -hex 32`. Do not reuse the value in `.env.example` or a local development secret.
4. Optionally set `GEMINI_API_KEY`, `GROQ_API_KEY`, `OPENROUTER_API_KEY`, or `OPENAI_API_KEY` for AI responses. Without them, the built-in local fallback is used.
5. Before the first release, run `npm run db:migrate` against the production database. Run `npm run db:seed:production` to load learning resources. To create a manager, set both `MANAGER_EMAIL` and `MANAGER_PASSWORD` in the seed process; the password must be at least 12 characters. The production seed is safe to rerun and creates no demo users.
6. Run `vercel deploy --prod` from this directory. The build checks `DATABASE_URL` and `JWT_SECRET` before compiling.

Do not run `npm run db:seed` against production. It creates demo accounts with known passwords and is blocked when `NODE_ENV=production`.

After deployment, check the landing page, sign up as a new student, sign out and sign back in, and post a channel message. Confirm the account and message remain after a new request. Check Vercel function logs if any API request fails.
