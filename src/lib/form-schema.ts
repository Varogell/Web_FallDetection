import {z} from "zod"
export const formSignInSchema = z.object({
    username: z.string({ required_error: "Username harus di-isi" }),
    password: z.string({ required_error: "Password harus di-isi" }),
  })