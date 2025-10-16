import * as React from 'react';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';

interface PayOrderTemplateProps {
  orderId: number;
  items: CartItemDTO[];
}

export function OrderSuccessTemplate({
  orderId,
  items,
}: PayOrderTemplateProps) {
  return (
    <div>
      <h1>Спасибо за покупку!</h1>

      <p>Ваш заказ #${orderId} успешно оплачен. Список товаров:</p>

      <hr />

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.productItem.product.name} | {item.productItem.price} ₽ x{' '}
            {item.quantity} шт. = {item.productItem.price * item.quantity} ₽
          </li>
        ))}
      </ul>
    </div>
  );
}
