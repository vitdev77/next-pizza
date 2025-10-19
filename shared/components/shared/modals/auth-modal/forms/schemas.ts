import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(4, { error: 'Пароль должен содержать не менее 4 символов.' });

export const formLoginSchema = z.object({
  email: z.email({ error: 'Некорректный формат адреса электронной почты.' }),
  password: passwordSchema,
});

export const formRegisterSchema = z
  .object({
    ...formLoginSchema.shape,
    fullName: z.string().min(2, { error: 'Укажите имя и фамилию.' }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Пароли не совпадают.',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
