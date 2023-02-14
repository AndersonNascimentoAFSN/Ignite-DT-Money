import { ReactNode, forwardRef } from "react";
import { ButtonContainer, SizeStylesProps } from "./styles";

type ButtonProps = {
  children: ReactNode;
  size?: SizeStylesProps;
  type: "submit" | "button";
};

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>(
  (props, ref) => {
    const { size = 'medium', children, type='button', ...buttonProps } = props;

    return (
      <ButtonContainer size={size} {...buttonProps} ref={ref} type={type}>
        {children}
      </ButtonContainer>
    );
  }
);
