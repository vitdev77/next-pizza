import Image from "next/image";
import { cn } from "@/shared/lib/utils";

interface Props {
  src: string;
  altText: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({
  src,
  altText,
  className,
}) => {
  return (
    <Image
      width={60}
      height={60}
      className={cn("w-[60px] h-[60px]", className)}
      src={src}
      alt={altText}
    />
  );
};
