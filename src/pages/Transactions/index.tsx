import { Header } from "../../components";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { UseGetAllTransactions } from "../../hooks/useGetAllTransactions";

import { Container, TransactionsContainer } from "./styles";

export function Transactions() {
  const { data, error, isLoading, isSuccess } = UseGetAllTransactions();

  return (
    <Container>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {!isLoading && isSuccess && <TransactionsTable transactions={data} />}
      </TransactionsContainer>
    </Container>
  );
}
