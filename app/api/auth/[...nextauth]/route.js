import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: { email, password },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) return null;
      },
    }),
  ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }