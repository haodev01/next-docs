import NextAuth from 'next-auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';
import { UserLoginForm } from './types';
import { authApi } from './api';

interface User {
  id: string;
  name?: string;
  email: string;
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {
        const data = await authApi
          .login(credentials as UserLoginForm)
          .then((res) => res)
          .catch(() => {});
        const decode = jwtDecode(data?.token as string);
        const user = await authApi
          .profile(decode.sub as string)
          .then((res) => res);
        return {
          id: '1',
          name: user.name.firstname,
          email: user.email,
          access_token: data?.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const newToken = { ...token };
      const newUser = { ...user } as User & { access_token: string };
      if (user) {
        newToken.access_token = newUser.access_token;
        newToken.user = newUser;
      }

      return newToken;
    },
    session: async ({ session, token }) => {
      const newToken = { ...token };
      if (!newToken) return session;
      return {
        ...session,
        user: {
          ...newToken.user,
        },
        access_token: newToken.access_token,
      };
    },
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
});

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
    access_token: string;
  }
}
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    access_token: string;
    user: User;
  }
}
