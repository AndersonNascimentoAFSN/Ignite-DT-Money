import * as Dialog from "@radix-ui/react-dialog";

import styled from "styled-components";

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
  color: ${props => props.theme.colors["gray-500"]};

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  &:hover {
    color: white;
  }
`;
