import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers:[
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
       async authorize (credentials)  {
        const user = {
          id: "1",
          email: "vitor@gmail.com",
          password: "123",
          name : "Vitor",
          role : "admin"
        }
        const isValidEmail = user.email === credentials?.email
        const isValidPassword = user.password === credentials?.password


        if(!isValidEmail || !isValidPassword){
          return null
        }

        return user
      //   if(!credentials) return null;
      //   const res = await fetch(
      //     "http://localhost:3333/users?email=" + credentials.email
      //   );
      //   const user = await res.json();

      //   if (user.length > 0 && user[0].password === credentials.password) {
      //     return { id: user[0].id, email: user[0].email };
      //   } else {
      //     return null;
      //   }
       },
    }),
  ],
  callbacks: {
    jwt: ({token, user}) => {
      const constumUser = user as unknown as any
     if (user) {
       return {
         ...token,
         role: constumUser?.role,
       };
     }
      return token
    },
  }
}


// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async credentials => {
//         if(!credentials) return null;
//         const res = await fetch(
//           "http://localhost:3333/users?email=" + credentials.email
//         );
//         const user = await res.json();

//         if (user.length > 0 && user[0].password === credentials.password) {
//           return { id: user[0].id, email: user[0].email };
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   //   callbacks: {
//   //     async jwt({ token, user }) {
//   //       // Se o usuário acabou de fazer login, salve o token retornado pela API externa
//   //       if (user?.apiToken) {
//   //         token.apiToken = user.apiToken;
//   //       }
//   //       return token;
//   //     },
//   //     async session({ session, token }) {
//   //       // Passe o token externo para a sessão do usuário
//   //       if (token?.apiToken) {
//   //         session.user.apiToken = token.apiToken as string;
//   //       }
//   //       return session;
//   //     },
//   //   },
// });

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
