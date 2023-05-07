import NextAuth from "next-auth";

import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const OPTIONS: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  // },
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
