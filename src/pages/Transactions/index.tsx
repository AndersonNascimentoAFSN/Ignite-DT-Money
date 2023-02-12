import { Header } from "../../components";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
// import { UseGetAllTransactions } from "../../hooks/useGetAllTransactions";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionsContainer } from "./styles";

export function Transactions() {
  // const { data, error, isLoading, isSuccess } = UseGetAllTransactions();
  const { transactions, transactionsLoading } = useTransactions();

  return (
    <Container>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {!transactionsLoading && (
          <TransactionsTable transactions={transactions} />
        )}
      </TransactionsContainer>
    </Container>
  );
}
