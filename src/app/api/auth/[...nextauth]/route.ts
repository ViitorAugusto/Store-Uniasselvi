import NextAuth from "next-auth";
import { auth } from "../../../../libs/auth-config";

const handler = NextAuth(auth);

export { handler as GET, handler as POST };
