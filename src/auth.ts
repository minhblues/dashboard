import NextAuth from "next-auth";
import { authConfig } from "@/core/auth/auth.config";
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
});
