import { Suspense } from "react";
import { Header } from "../../components";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { useTransactions } from "../../hooks/useTransactions";
import { useTransactionsAsync } from "../../hooks/useTransactionsAsync";

import { Container, TransactionsContainer } from "./styles";

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        {
          <Suspense
            fallback={
              <div>
                <span>Loading...</span>
              </div>
            }
          >
            <TransactionsTable
              transactions={transactions ? transactions : []}
            />
          </Suspense>
        }
      </TransactionsContainer>
    </Container>
  );
}
