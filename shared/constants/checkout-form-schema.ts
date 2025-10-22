import * as z from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { error: 'Имя должно содержать не менее одого символа' }),
  lastName: z
    .string()
    .min(1, { error: 'Фамилия должна содержать не менее одного символа' }),
  email: z.email({ error: 'Некорректный адрес электронной почты' }),
  phone: z.string().min(10, { error: 'Укажите корректный номер телефона' }),
  address: z
    .string()
    .min(5, { error: 'Укажите корректный адрес для доставки' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
