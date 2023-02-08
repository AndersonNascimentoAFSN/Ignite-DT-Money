import {
  PriceHighlight,
  TransactionsTableBody,
  TransactionsTableContainer,
  TransactionsTableTd,
  TransactionsTableTr,
} from "./styles";

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <TransactionsTableBody>
        <TransactionsTableTr>
          <TransactionsTableTd>Desenvolvimento de site</TransactionsTableTd>

          <TransactionsTableTd>
            <PriceHighlight variant={12000 > 0 ? "income" : "outcome"}>
              12000
            </PriceHighlight>
          </TransactionsTableTd>

          <TransactionsTableTd>venda</TransactionsTableTd>

          <TransactionsTableTd>13/04/2022</TransactionsTableTd>
        </TransactionsTableTr>

        <TransactionsTableTr>
          <TransactionsTableTd>Desenvolvimento de site</TransactionsTableTd>

          <TransactionsTableTd>
            <PriceHighlight variant={-12000 > 0 ? "income" : "outcome"}>12000</PriceHighlight>
          </TransactionsTableTd>

          <TransactionsTableTd>venda</TransactionsTableTd>

          <TransactionsTableTd>13/04/2022</TransactionsTableTd>
        </TransactionsTableTr>
      </TransactionsTableBody>
    </TransactionsTableContainer>
  );
}
