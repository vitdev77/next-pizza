import * as React from "react";
import { cn } from "@/shared/lib";

interface Props {
  className?: string;
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div className="flex items-center gap-5">
        <div className="w-[60px] h-[60px] bg-accent rounded-full animate-pulse" />
        <h2 className="w-72 h-5 bg-accent rounded-md animate-pulse" />
      </div>
      <div className="w-12 h-5 bg-accent rounded-md animate-pulse" />
      <div className="w-[146px] h-8 bg-accent rounded-md animate-pulse" />
    </div>
  );
};
