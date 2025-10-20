import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(6, { error: 'Пароль должен быть не менее 6 символов.' });

export const formLoginSchema = z.object({
  email: z.email({ error: 'Некорректный адрес электронной почты.' }),
  password: passwordSchema,
});

export const formRegisterSchema = z
  .object({
    ...formLoginSchema.shape,
    fullName: z
      .string()
      .min(2, { error: 'Поле должно содержать не менее 2 букв.' }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Пароли не совпадают.',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
