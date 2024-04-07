import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        // Dados para login
        const loginInfo = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          // Solicitação POST para o endpoint de login
          const response = await fetch("http://localhost:3333/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginInfo),
          });

          const user = await response.json();

          if (response.ok && user) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Erro ao fazer login:", error);
          return null;
        }
      },
    }),
  ],
  //   callbacks: {
  //     async jwt({ token, user }) {
  //       // Se o usuário acabou de fazer login, salve o token retornado pela API externa
  //       if (user?.apiToken) {
  //         token.apiToken = user.apiToken;
  //       }
  //       return token;
  //     },
  //     async session({ session, token }) {
  //       // Passe o token externo para a sessão do usuário
  //       if (token?.apiToken) {
  //         session.user.apiToken = token.apiToken as string;
  //       }
  //       return session;
  //     },
  //   },
});

export { handler as GET, handler as POST };
