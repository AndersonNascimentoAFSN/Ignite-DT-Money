import { Header } from "../../components";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Container, TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <Container>
      <Header />

      <Summary />

      <TransactionsContainer>
        <TransactionsTable />
      </TransactionsContainer>
    </Container>
  );
}
