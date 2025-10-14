import * as z from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2-х символов" }),
  lastName: z
    .string()
    .min(2, { message: "Фамилия должна содержать не менее 2-х символов" }),
  email: z.email({ message: "Некорректный формат электронной почты" }),
  phone: z.string().min(10, { message: "Укажите корректный номер телефона" }),
  address: z
    .string()
    .min(5, { message: "Укажите корректный адрес для доставки" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
