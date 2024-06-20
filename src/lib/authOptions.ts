import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../lib/prisma"
import { comparePassword, generateUniqueId } from "./Utils"

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
          },
          password: {
            label: "Password",
            type: "password",
          },
        },
  
        async authorize(credentials, req): Promise<any> {
          if (!credentials?.username || !credentials?.password) {
            return null; // Return null if username or password is missing
          }
            
          const user = await prisma.login.findFirst({
            where: {
              username: credentials?.username,
              password: credentials?.password,
            },
          })
          if(!user){
            return null
          }
  
          if (user) {
            return {
              id: user.id ,
              username: user.username,
              firstname :user.firstname,
              lastname  :user.lastname,
              address   :user.address,
              contact   :user.contact,
              city      :user.city,
              state     :user.state,
              password  :user.password,
            }
          }
  
          // const isMatch = await comparePassword(
          //   credentials?.password!!,
          //   user.password!!
          // )
  
          // if (isMatch) {
          //   return {
          //     id: user.id ,
          //     username: user.username,
          //     firstname :user.firstname,
          //     lastname  :user.lastname,
          //     address   :user.address,
          //     contact   :user.contact,
          //     city      :user.city,
          //     state     :user.state,
          //     password  :user.password,
          //   }
          // }
  
          return null
        },
      }),
    ],
    pages: {
      signIn: "/login",
      error: "/auth/error",
      newUser: "/daftar",
    },
    callbacks: {
      async jwt({ token, account, user }) {
        if (account) {
          token.id = user
        }
  
        return token
      },
      async session({ session, token }) {
        session.user.id = token.id
  
        return session
      },
    },
  }