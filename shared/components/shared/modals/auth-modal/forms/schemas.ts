import { email, z } from 'zod';

export const formLoginSchema = z.object({
  email: z.email({ error: 'Формат почты указан неверно' }),
  password: z
    .string()
    .min(6, { error: 'Пароль должен содержать не менее 6 символов' }),
});
