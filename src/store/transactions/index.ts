import { atom, selector } from "recoil";
import { requestsAPI } from "../../services/requestsAPI";

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

// export const transactionsAsync = selector({
//   key: "transactionsAsync",
//   get: async () => {
//     const response = await requestsAPI.getAllTransactions();
//     return response;
//   },
// });


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