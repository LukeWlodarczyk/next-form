import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { z } from "zod";

const CandidateSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .max(30, { message: "Full name is too long (max: 30 characters)" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z.string({ required_error: "Phone is required" }),
});

export const candidateConstraint = getZodConstraint(CandidateSchema);

export const validateCandidateForm = (formData: FormData) =>
  parseWithZod(formData, { schema: CandidateSchema });
