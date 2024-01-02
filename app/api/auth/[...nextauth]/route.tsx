import NextAuth from "next-auth/next";
import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb";
import GoogleProvider from 'next-auth/providers/google';

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret =  process.env.GOOGLE_CLIENT_SECRET as string;

type Props = {
  user: any, 
  account: any
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: Props) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
                body: JSON.stringify({
                  name,
                  email,
                }),
              });

              if (res.ok) {
                return user;
              }
            }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };