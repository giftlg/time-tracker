
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'


const authOption: NextAuthOptions = {
    session: {
      strategy: 'jwt'
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '103981743912-5ii0l4953l53kjd2o6ii1m4vauf36n77.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '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'
      })
    ]
}

 const handler = NextAuth(authOption)
 export { handler as GET, handler as POST }