import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "../Button";

import logoImg from "../../assets/logo-white.svg";

import { HeaderContainer, HeaderContent, Image } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>Nova transação</Button>
          </Dialog.Trigger>

        <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}
