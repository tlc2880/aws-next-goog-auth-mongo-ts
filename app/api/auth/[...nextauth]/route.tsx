import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google';
let clientId = process.env.GOOGLE_CLIENT_ID as string;
let clientSecret =  process.env.GOOGLE_CLIENT_SECRET as string;

const authOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };