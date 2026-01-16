import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .max(30, { message: "First name must be at most 30 characters" }),

    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .max(30, { message: "Last name must be at most 30 characters" }),

    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(20, { message: "Username must be at most 20 characters" })
      .regex(/^[a-zA-Z0-9._-]+$/, {
        message: "Username can contain letters, numbers, dots, underscores, and hyphens only",
      }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),

    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),

    terms: z
      .boolean()
      .refine((v) => v === true, { message: "You must accept the terms and conditions" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });


  export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
