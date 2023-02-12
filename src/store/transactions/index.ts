import { atom, selector } from "recoil";

import { ITransactionFormatted } from "./../../@types/transaction";

export const transactionsStore = atom<ITransactionFormatted[]>({
  key: "transactionStore",
  default: [],
});

export const transactionsSummary = selector({
  key: "TransactionsSummary",
  get: ({ get }) => {
    const transactionsList = get(transactionsStore);

    return transactionsList.reduce(
      (acc, curr) => {
        if (curr.type === "income") acc["income"] += curr.price;
        if (curr.type === "outcome") acc["outcome"] += curr.price;
        acc.total += curr.price;

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  },
});
