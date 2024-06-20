import bcrypt from "bcryptjs"

export const hashPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 8)
  
    return hashedPassword
  }
  
  export const comparePassword = async (
    password: string,
    hashedPassword: string
  ) => {
    const isMatch = await bcrypt.compare(password, hashedPassword)
  
    return isMatch
  }
  
  export const generateUniqueId = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const timestamp = new Date().getTime().toString(36) // Mengonversi waktu saat ini menjadi string dalam basis 36
    let result = timestamp
  
    for (let i = 0; i < length - timestamp.length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
  
    return result
  }