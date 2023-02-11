import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { Button } from "../Button";

import { Input } from "../Input";

import {
  Content,
  FormTransactionModal,
  CloseButton,
  Overlay,
  TransactionType,
  TransactionTypeButton,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close asChild aria-label="Close">
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </Dialog.Close>

        <FormTransactionModal>
          <Input type="text" placeholder="Descrição" required />
          <Input type="number" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUpIcon />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton value="outcome" variant="outcome">
              <ArrowCircleDownIcon />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <Button type="button">Cadastrar</Button>
        </FormTransactionModal>
      </Content>
    </Dialog.Portal>
  );
}
