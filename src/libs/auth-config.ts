import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const auth: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const res = await fetch(
          "http://localhost:3333/users?email=" + credentials.email
        );
        const user = await res.json();

        if (user.length > 0 && user[0].password === credentials.password) {
          return { id: user[0].id, email: user[0].email };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const constumUser = user as unknown as any;
      if (user) {
        return {
          ...token,
          role: constumUser?.role,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        return {
          ...session,
          user: { email: token.email, role: token.role },
        };
      }
      return session;
    },
  },
};
