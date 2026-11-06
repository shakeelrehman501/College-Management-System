import { z } from "zod";

const registerUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 character")
    .max(30, "Name cannot exceed 30 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contains letters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Please provide a valid email address." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password cannot exceed 32 characters" })
    .regex(/[A-Z]B?/, { message: "Must contain at least one uppercase letter" }) // or custom regex
    .regex(/[0-9]/, { message: "Must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Must contain at least one special character",
    }),

  role: z.enum(["student", "teacher", "admin"], {
    message: "Please select a valid role (student, teacher or admin)",
  }),
});

export { registerUserSchema };
