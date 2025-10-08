import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image height={212} width={215} src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="font-bold mb-1 mt-3" />

        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредо, чеснок
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
