import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { db } from '@/lib/db'

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Credentials')
        }
        const user = await db?.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if (!user?.hashedPassword) {
          throw new Error('Invalid Credentials')
        }

        const isCorrectPassword = await compare(credentials.password, user.hashedPassword)

        if (!isCorrectPassword) {
          throw new Error('Invalid Credentials')
        }

        return user
      }

    })
  ]
})

export { handler as GET, handler as POST }
