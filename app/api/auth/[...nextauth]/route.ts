import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if a user already exists

      // if not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
