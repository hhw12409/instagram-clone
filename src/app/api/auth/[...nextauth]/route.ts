import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export type User = {
  name: string;
  email: string;
  image: string;
  username: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const user: User = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
