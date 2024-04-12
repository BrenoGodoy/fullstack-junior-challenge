import { z } from "zod";

export const RequestBodySchema = z.object({
  name: z.string(),
  age: z.number(),
  phone: z.string(),
  state: z.string(),
  city: z.string()
});