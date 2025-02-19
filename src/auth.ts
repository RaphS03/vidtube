import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import Email from "next-auth/providers/nodemailer";

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [Google, Discord, Email],
});