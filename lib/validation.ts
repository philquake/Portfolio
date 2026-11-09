import { z } from "zod";

/** One schema for both the contact form and the project inquiry form. */
export const messageSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email address").max(200),
  business: z.string().trim().max(150).optional(),
  projectType: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(50).optional(),
  message: z.string().trim().min(20, "Please write at least 20 characters").max(5000),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().max(0).optional(),
});

export type MessageInput = z.infer<typeof messageSchema>;
