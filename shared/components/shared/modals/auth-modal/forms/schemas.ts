import * as z from 'zod';

export const passwordSchema = z
  .string('Пароль является обязательным')
  .min(1, 'Пароль является обязательным')
  .min(6, { error: 'Пароль должен быть не менее 6 символов' })
  .max(32, { error: 'Пароль должен быть не более 32 символов' });

export const formLoginSchema = z.object({
  email: z.email({ error: 'Некорректный адрес электронной почты' }),
  password: passwordSchema,
});

export const formRegisterSchema = z
  .object({
    ...formLoginSchema.shape,
    fullName: z
      .string()
      .min(2, { error: 'Поле должно содержать не менее 2 символов' }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Указанные пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
