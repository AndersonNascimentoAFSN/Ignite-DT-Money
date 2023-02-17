import { atom, selector, selectorFamily } from "recoil";
import { requestsAPI } from "../../services/requestsAPI";

import { ITransactionFormatted } from "./../../@types/transaction";

export const queryAtom = atom({
  key: "query",
  default: {
    query: "",
  },
});

export const transactionsStore = selector({
  key: "transactions",
  get: async () => {
    const transactions = await requestsAPI.getAllTransactions();

    return transactions;
  },
});

export const transactionsSummary = selector({
  key: "TransactionsSummary",
  get: ({ get }) => {
    const transactionsList = get(transactionsStore);

    if (transactionsList) {
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
    } else return {
      income: 0,
      outcome: 0,
      total: 0,
    }
  },
});

// export const transactionsSummary = selector({
//   key: "TransactionsSummary",
//   get: ({ get }) => {
//     const transactionsList = get(transactionsAsync);

//     if (transactionsList) {

//       return transactionsList.reduce(
//         (acc, curr) => {
//           if (curr.type === "income") acc["income"] += curr.price;
//           if (curr.type === "outcome") acc["outcome"] += curr.price;
//           acc.total += curr.price;

//           return acc;
//         },
//         {
//           income: 0,
//           outcome: 0,
//           total: 0,
//         }
//       );
//     } else {
//       []
//     }
//   },
// });
