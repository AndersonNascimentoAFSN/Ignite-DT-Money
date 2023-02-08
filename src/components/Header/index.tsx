import { HeaderContainer, HeaderContent, Image } from "./styles";

import { Button } from "../Button";

import logoImg from "../../assets/logo-white.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={logoImg} alt="" />
        <Button>Nova transação</Button>
      </HeaderContent>
    </HeaderContainer>
  );
}
