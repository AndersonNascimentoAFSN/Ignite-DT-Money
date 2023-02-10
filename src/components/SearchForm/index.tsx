import { MagnifyingGlass } from "phosphor-react";

import { Button, Input, SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <Input type="text" placeholder="Busque por transações" />

      <Button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
