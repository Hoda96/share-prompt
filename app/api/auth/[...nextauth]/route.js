import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import { User } from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.User.email,
    });

    // Always Know Which User Is Online
    session.user.id = sessionUser._id.toString();

    return session;
  },

  async signIn({ profile }) {
    try {
      await connectToDB();

      //check if a user already exist
      const userExists = User.findOne({
        email: profile.email,
      });
      //if not, create a new user
      if (!userExists) {
        User.create({
          email: profile.email,
          username: profile.username.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
    // },
  },
});
export { handler as GET, handler as POST };
