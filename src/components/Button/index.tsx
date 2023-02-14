import { ReactNode, forwardRef } from "react";
import { ButtonContainer, SizeStylesProps } from "./styles";

type ButtonProps = {
  children: ReactNode;
  size?: SizeStylesProps;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { size = 'medium', children, ...buttonProps } = props;

    return (
      <ButtonContainer size={size} {...buttonProps} ref={ref}>
        {children}
      </ButtonContainer>
    );
  }
);
