import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <Input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <Button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </Button>
    </SearchFormContainer>
  );
}
