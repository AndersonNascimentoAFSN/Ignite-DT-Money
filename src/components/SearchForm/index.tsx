import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input, SearchFormContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { useQuery } from "../../hooks/useQuery";
import { Suspense } from "react";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { setQuery, query } = useQuery();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchTransactions(data: SearchFormInputs) {
    // await new Promise(resolve => setTimeout(resolve, 2000))

    setQuery(data);
  }

  console.log(query);

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <Suspense>
        <Input
          type="text"
          placeholder="Busque por transações"
          autoComplete="off"
          {...register("query")}
        />

        <Button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </Button>
      </Suspense>
    </SearchFormContainer>
  );
}
