import * as React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="4ef460392ef7047fb4e8d2ef42d00b1fa955f7fc"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
