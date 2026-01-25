import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],
  // This connects the user to your database (MongoDB/Sanity)
  callbacks: {
    async signIn({ user, account, profile }) {
      // Logic: If user is new, save to your database
      return true;
    },
    async session({ session, token }) {
      // Logic: Add custom info like 'isAdmin' to the user session
      return session;
    },
  },
  pages: {
    signIn: '/auth', // Directs users to your custom aesthetic login page
  },
});

export { handler as GET, handler as POST };