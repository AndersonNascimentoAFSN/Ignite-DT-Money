import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export type SizeStylesProps = "small" | "medium" | "large";

export type ButtonStylesProps = {
  size: SizeStylesProps;
};

export const ButtonContainer = styled.button<ButtonStylesProps>`
  all: unset;
  
  text-align: center;

  ${(props) =>
    css`
      background-color: ${props.theme.colors["green-500"]};
      color: ${props.theme.colors["white"]};

      font-weight: ${props.theme.fonts.weights.bold};
      line-height: ${props.theme.fonts.lineHeight};

      &:hover {
        background-color: ${props.theme.colors["green-300"]};
        transition: background-color 0.2s;
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      padding: ${props.theme.spaces[8]} ${props.theme.spaces[16]};
      font-size: ${props.theme.fonts.sizes[14]};
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: ${props.theme.spaces[12]} ${props.theme.spaces[20]};
      font-size: ${props.theme.fonts.sizes[16]};
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      padding: ${props.theme.spaces[16]} ${props.theme.spaces[32]};
      font-size: ${props.theme.fonts.sizes[16]};
    `}

  border-radius: 6px;
  border: 0;

  cursor: pointer;
`;
