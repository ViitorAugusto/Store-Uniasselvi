import { z } from "zod";

export const RegisterUserSchema = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(3, {
      message: "Nome deve ter no mínimo 3 caracteres",
    }),
  lastName: z
    .string({
      required_error: "Sobrenome é obrigatório",
    })
    .min(3, {
      message: "Sobrenome deve ter no mínimo 3 caracteres",
    }),
  email: z
    .string({
      required_error: "E-mail é obrigatório",
    })
    .email({
      message: "E-mail inválido",
    }),
  password: z
    .string({
      required_error: "Senha é obrigatória",
    })
    .min(3, {
      message: "Senha deve ter no mínimo 6 caracteres",
    }),
  confirmPassword: z
    .string({
      required_error: "Confirmação de senha é obrigatória",
    })
    .min(3, {
      message: "Confirmação de senha precisar ser igual a senha",
    }),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;
