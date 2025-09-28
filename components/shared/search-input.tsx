"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import * as React from "react";
import { useClickAway } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      {focused && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex flex-1 rounded-xl justify-between relative h-9 z-30",
          className
        )}
      >
        <Search
          size={20}
          className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400"
        />
        <input
          placeholder="Найти пиццу..."
          type="text"
          className="w-full rounded-xl outline-none bg-gray-100 pl-11"
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  );
};
