import { ITransactionFormatted } from "../../@types/transaction";
import {
  PriceHighlight,
  TransactionsTableBody,
  TransactionsTableContainer,
  TransactionsTableTd,
  TransactionsTableTr,
} from "./styles";

type TransactionsTableProps = {
  transactions: ITransactionFormatted[];
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <TransactionsTableContainer>
      <TransactionsTableBody>
        {transactions?.map(
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
