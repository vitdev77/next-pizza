import * as React from "react";

interface PayOrderTemplateProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export function PayOrderTemplate({
  orderId,
  totalAmount,
  paymentUrl,
}: PayOrderTemplateProps) {
  return (
    <div>
      <h1>Заказ #: {orderId}</h1>

      <p>
        Пожалуйста, оплатите заказ на сумму <b>{totalAmount} ₽</b>. Перейдите по{" "}
        <a href={paymentUrl}>этой ссылке</a> для завершения оплаты заказа.
      </p>
    </div>
  );
}
