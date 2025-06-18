import { z } from "zod";

export const registerUserSchema = z.object({
  user: z.object({
    name: z.object({
      firstName: z.string().min(1, "First name is required"),
      middleName: z.string().optional(),
      lastName: z.string().min(1, "Last name is required"),
    }),

    gender: z.enum(["Male", "Female", "Others"], {
      required_error: "Gender is required",
    }),

    age: z
      .number({
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
      })
      .int()
      .min(18, "Age must be at least 18")
      .optional(),

    contactInfo: z.object({
      mobileNo: z.string().min(1, "Mobile number is required"),

      email: z.string().email("Invalid email address"),
    }),

    password: z.string().min(6, "Password must be at least 6 characters long"),
  }),
});

export type TRegisterUserForm = z.infer<typeof registerUserSchema>;
