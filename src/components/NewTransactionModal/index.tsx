import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

import { Button } from "../Button";

import { Input } from "../Input";

import { Content, FormTransactionModal, CloseButton, Overlay } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close asChild aria-label="Close">
          <CloseButton>
            <X size={24}/>
          </CloseButton>
        </Dialog.Close>

        <FormTransactionModal>
          <Input type="text" placeholder="Descrição" required />
          <Input type="number" placeholder="Preço" required />
          <Input type="text" placeholder="Categoria" required />

          <Button type="submit">Cadastrar</Button>
        </FormTransactionModal>
      </Content>
    </Dialog.Portal>
  );
}
