import * as React from "react";

interface Props {
  className?: string;
}

export const Ingredient: React.FC<Props> = ({ className }) => {
  return <div className={className}>Ingredient</div>;
};
