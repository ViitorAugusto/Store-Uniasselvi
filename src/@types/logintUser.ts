import {z} from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email({
    message: "Email e/ou senha inválidos",
  }),
  password: z
    .string({
      required_error: "Email ou Senha inválido",
    })
    .min(1, {
      message: "Email e/ou senha inválidos",
    }),
});

export type LoginUser = z.infer<typeof LoginUserSchema>;