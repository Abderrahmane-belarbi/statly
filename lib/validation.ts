import z from "zod";
export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {message: "Password must be at least 6 charactors"}).max(20, { message: "Password must be less then 20 character"})
});
export const UserRegisterSchema = UserLoginSchema.extend({
  name: z.string().min(4, {message: "Name must be at least 3 characters"}).max(20, { message: "Username must be less then 20 character"}),
  confirmPassword: z.string().min(6, {message: "Password must be at least 6 charactors"}).max(20, { message: "Password must be less then 20 character"})
}).superRefine((data, ctx) => {
  if(data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: "custom",
      path: ["confirmPassword"],
      message: "Password not match"
    })
  }
})
export type UserRegister = z.infer<typeof UserRegisterSchema>;
export type UserLogin = z.infer<typeof UserLoginSchema>;
