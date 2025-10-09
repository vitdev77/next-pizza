import { cn } from "@/shared/lib/utils";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/shared/components/ui";
import { CartButton, Container, SearchInput } from "@/shared/components/shared";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: String;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image src={"/logo.svg"} alt="Logo" width={42} height={42} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant={"outline"}>
            <User size={16} />
            Войти
          </Button>
          <CartButton />
        </div>
      </Container>
    </header>
  );
};

export { Header };
