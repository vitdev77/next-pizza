import * as z from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: 'Имя должно содержать не менее 2-х символов' }),
  lastName: z
    .string()
    .min(2, { error: 'Фамилия должна содержать не менее 2-х символов' }),
  email: z.email({ error: 'Некорректный формат электронной почты' }),
  phone: z.string().min(10, { error: 'Укажите корректный номер телефона' }),
  address: z
    .string()
    .min(5, { error: 'Укажите корректный адрес для доставки' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
