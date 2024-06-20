import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface User {
    id: any
    username: string
    level: string
  }
  interface Session {
    user: User
  }
}