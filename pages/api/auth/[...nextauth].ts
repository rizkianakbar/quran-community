import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.SECRET,
  },
});
