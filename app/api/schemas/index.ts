import { z } from "zod";

const phoneRegex = /^\(\d{2}\) \d{4,5}\-\d{4}$/;

export const RequestBodySchema = z.object({
  name: z.string().min(1),
  age: z.number().min(1),
  phone: z.string().min(1).refine((value) => phoneRegex.test(value), {
    message: 'Invalid phone number format (expected format: (00) 0000-0000)'
  }),
  state: z.string().min(1),
  city: z.string().min(1)
}).strict();