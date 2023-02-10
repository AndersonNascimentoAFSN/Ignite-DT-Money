import { Header } from "../../components";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Container, TransactionsContainer } from "./styles";

export function Transactions() {
  return (
    <Container>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />
        
        <TransactionsTable
          transactionsFormatted={[
            {
              id: "axas",
              title: "Desenvolvimento Web",
              category: "Venda",
              formattedPrice: "R$ 12.000,00",
              formattedDate: "13/01/2023",
              price: 12000,
            },
            {
              id: "kdjkas",
              title: "Headset",
              category: "Itens",
              formattedPrice: "R$ 150,00",
              formattedDate: "12/01/2023",
              price: -150,
            },
          ]}
        />
      </TransactionsContainer>
    </Container>
  );
}
