import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().min(6, "Verifiation must be 6 digits"),
});
