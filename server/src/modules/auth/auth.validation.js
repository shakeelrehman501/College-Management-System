import { z } from "zod";

const registerUserSchema = z
  .object({
    name: z
      .string({
        error: "Name is required",
      })
      .trim()
      .min(3, "Name must contain at least 3 characters")
      .max(30, "Name cannot exceed 30 characters")
      .regex(/^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/, "Invalid name format"),

    email: z
      .string({
        error: "Email is required",
      })
      .trim()
      .toLowerCase()
      .min(1, "Email is required")
      .max(254, "Email cannot exceed 254 characters")
      .email("Please provide a valid email address"),

    password: z
      .string({
        error: "Password is required",
      })
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password cannot exceed 32 characters")
      .refine(
        (value) => Buffer.byteLength(value, "utf8") <= 72,
        "Password exceeds the maximum supported length",
      )
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
  })
  .strict();

const loginUserSchema = z
  .object({
    email: z
      .string({
        error: "Email is required",
      })
      .trim()
      .toLowerCase()
      .min(1, "Email is required")
      .max(254, "Email cannot exceed 254 characters")
      .email("Please provide a valid email address"),

    password: z
      .string({
        error: "Password is required",
      })
      .min(1, "Password is required")
      .max(72, "Password cannot exceed the supported length")
      .refine(
        (value) => Buffer.byteLength(value, "utf8") <= 72,
        "Invalid password length"
      ),

    // Optional portal selection
    role: z
      .enum(["student", "teacher", "admin"], {
        error: "Please select a valid portal",
      })
      .optional(),
  })
  .strict();


export { registerUserSchema, loginUserSchema };
