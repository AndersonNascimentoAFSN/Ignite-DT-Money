import { forwardRef } from "react";

import { InputContainer } from "./styled";

export type Ref = HTMLInputElement;

type InputProps = {
  disabled?: boolean;
  type?: string;
  placeholder?: string;
};

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { type, placeholder, ...inputProps } = props;

  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...inputProps}
    />
  );
});
