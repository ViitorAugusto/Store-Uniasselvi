import {z} from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export type LoginUser = z.infer<typeof LoginUserSchema>;