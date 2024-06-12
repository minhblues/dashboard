import "next-auth/jwt";
import { cookies } from "next/headers";
import NextAuth, {
  CredentialsSignin,
  NextAuthConfig,
  type DefaultSession,
} from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "@/lib/utils";
import AuthApi, { UserType } from "../../services/AuthApi";
import { JWT } from "next-auth/jwt";
class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password";
}

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: number;
      syId: string;
      adminId: string;
      name: string;
      email: string;
      status: number;
      token: string;
      tokenExpiredAt: Date;
      createdAt: null;
      updatedAt: Date;
      deletedAt: null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    syId: string;
    adminId: string;
    name: string;
    email: string;
    status: number;
    token: string;
    tokenExpiredAt: Date;
    createdAt: null;
    updatedAt: Date;
    deletedAt: null;
  }
}
export const authConfig = {
  providers: [
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      authorize: async (credentials) => {
        let user = null;
        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password as string);

        // logic to verify if user exists
        const response = await AuthApi.login(
          credentials.email as string,
          pwHash,
        );

        user = response.data.data;
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new InvalidLoginError();
        }

        cookies().set("db_session", user.token);

        // return user object with the their profile data
        delete user.password;
        delete user.salt;
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
  },
  events: {
    signOut: async ({ token }: { token: JWT }) => {
      await AuthApi.request("POST", "/logout", undefined, undefined, {
        headers: {
          Authorization: token?.token,
        },
      });

      cookies().delete("db_session");
    },
  },
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
    jwt({ token, user }) {
      return {
        ...user,
        ...token,
        jti: token?.token || token?.jti,
      };
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;
