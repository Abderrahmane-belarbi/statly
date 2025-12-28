import z from "zod";

const userSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});
export type User = z.infer<typeof userSchema>;