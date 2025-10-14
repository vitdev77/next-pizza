import * as React from "react";
import { CheckoutItemDetails, WhiteBlock } from ".";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  totalAmount: number;
  className?: string;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;
  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        <span className="text-[34px] font-extrabold">{totalPrice} ₽</span>
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Package size={18} className="text-gray-400" />
            Стоимость корзины:
          </div>
        }
        value={`${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Percent size={18} className="text-gray-400" />
            Налоги:
          </div>
        }
        value={`${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center gap-2">
            <Truck size={18} className="text-gray-400" />
            Доставка:
          </div>
        }
        value={`${DELIVERY_PRICE} ₽`}
      />

      <Button
        type="submit"
        size={"lg"}
        className="w-full h-14 text-base font-bold mt-6"
      >
        Перейти к оплате <ArrowRight width={20} height={20} />
      </Button>
    </WhiteBlock>
  );
};
