import { cn } from "@/lib/utils";
import * as React from "react";
import Container from "./container";
import Image from "next/image";
import { Button } from "@/components/ui";

interface Props {
  className?: String;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src={"/logo.svg"} alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Nextjs App</h1>
            <p className="text-sm text-gray-400 leading-3">
              Super App Description
            </p>
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant={"outline"}>Sign In</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
