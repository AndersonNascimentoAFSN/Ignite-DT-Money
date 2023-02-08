import {
  PriceHighlight,
  TransactionsTableBody,
  TransactionsTableContainer,
  TransactionsTableTd,
  TransactionsTableTr,
} from "./styles";

type TransactionsTableProps = {
  transactionsFormatted: {
    id: string;
    title: string;
    price: number;
    formattedPrice: string;
    category: string;
    formattedDate: string;
  }[];
};

export function TransactionsTable({
  transactionsFormatted,
}: TransactionsTableProps) {
  return (
    <TransactionsTableContainer>
      <TransactionsTableBody>
        {transactionsFormatted.map(
          ({ id, title, price, category, formattedPrice, formattedDate }) => (
            <TransactionsTableTr key={id}>
              <TransactionsTableTd>{title}</TransactionsTableTd>

              <TransactionsTableTd>
                <PriceHighlight variant={price > 0 ? "income" : "outcome"}>
                  {formattedPrice}
                </PriceHighlight>
              </TransactionsTableTd>

              <TransactionsTableTd>{category}</TransactionsTableTd>

              <TransactionsTableTd>{formattedDate}</TransactionsTableTd>
            </TransactionsTableTr>
          )
        )}
      </TransactionsTableBody>
    </TransactionsTableContainer>
  );
}
