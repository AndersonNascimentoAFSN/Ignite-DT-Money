import { ReactNode, forwardRef } from "react";
import { ButtonContainer, SizeStylesProps } from "./styles";

type ButtonProps = {
  children: ReactNode;
  size?: SizeStylesProps;
  type: "submit" | "button";
  disabled?: boolean;
};

export type Ref = HTMLButtonElement

export const Button = forwardRef<Ref, ButtonProps>(
  (props, ref) => {
    const { size = 'medium', children, disabled, type='button', ...buttonProps } = props;

    return (
      <ButtonContainer disabled={disabled} size={size} {...buttonProps} ref={ref} type={type}>
        {children}
      </ButtonContainer>
    );
  }
);
