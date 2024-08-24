import { z } from "zod";

export const Application = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  phone: z.string().min(1, { message: "Phone is required" }),
});
