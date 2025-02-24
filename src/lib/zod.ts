
import { object, string, z, array } from "zod"

export const loginSchema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
})



export type loginSchema = z.infer<typeof loginSchema>;
