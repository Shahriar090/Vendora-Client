import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ required_error: "Email Is Required" })
    .email("Invalid Email Format")
    .trim(),
  password: z.string({ required_error: "Password Is Required" }),
});

export type TLoginUserForm = z.infer<typeof loginValidationSchema>;
