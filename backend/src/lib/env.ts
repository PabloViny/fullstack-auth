import { z } from "zod";

const envSchema = z.object({
    PORT: z.coerce.number()
})

const env = envSchema.parse(process.env)

export {env}