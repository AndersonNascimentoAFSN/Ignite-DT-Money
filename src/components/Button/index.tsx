import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ButtonContainer, SizeStylesProps } from "./styles";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  size?: SizeStylesProps;
}

export function Button({ children, size = "medium", ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props} size={size}>
      {children}
    </ButtonContainer>
  );
}
