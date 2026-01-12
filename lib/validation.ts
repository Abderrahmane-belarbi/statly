import z from "zod";
export const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
export const UserRegisterSchema = UserLoginSchema.extend({
  username: z.string().min(3),
        confirmPassword: z.string().min(6)
})

export type UserRegister = z.infer<typeof UserRegisterSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
