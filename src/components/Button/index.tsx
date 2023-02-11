import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer, SizeStylesProps } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: SizeStylesProps;
};

export function Button({ children, size = "medium", ...props }: ButtonProps) {
  return (
    <ButtonContainer size={size} {...props}>
      {children}
    </ButtonContainer>
  );
}
