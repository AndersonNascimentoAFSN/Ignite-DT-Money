import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

import styled, { css } from "styled-components";

export const NewTransactionModalContainer = styled.div``;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.colors["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormTransactionModal = styled.form`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  all: unset;

  cursor: pointer;
  background: transparent;

  font-family: inherit;
  line-height: 0;

  border-radius: 100%;

  height: 25px;
  width: 25px;

  display: inline-flex;

  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors["gray-500"]};

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    color: white;
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

type TransactionTypeButtonProps = {
  variant: "income" | "outcome";
};

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme.colors["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme.colors["gray-300"]};

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme.colors["gray-600"]};
    transition: background-color 0.2s;
  }

  ${(props) =>
    props.variant === "income" &&
    css`
      svg {
        color: ${(props) => props.theme.colors["green-300"]};
      }
    `}

  ${(props) =>
    props.variant === "outcome" &&
    css`
      svg {
        color: ${(props) => props.theme.colors["red-300"]};
      }
    `}

  ${(props) =>
    props.variant === "income" &&
    css`
      &[data-state="checked"] {
        color: ${(props) => props.theme.colors.white};
        background: ${props.theme.colors["green-500"]};

        svg {
          color: ${(props) => props.theme.colors.white};
        }
      }
    `}

  ${(props) =>
    props.variant === "outcome" &&
    css`
      &[data-state="checked"] {
        color: ${(props) => props.theme.colors.white};
        background: ${props.theme.colors["red-500"]};

        svg {
          color: ${(props) => props.theme.colors.white};
        }
      }
    `}
`;

export const ArrowCircleUpIcon = styled(ArrowCircleUp).attrs((props) => ({
  size: 24,
}))``;

export const ArrowCircleDownIcon = styled(ArrowCircleDown).attrs((props) => ({
  size: 24,
}))``;
