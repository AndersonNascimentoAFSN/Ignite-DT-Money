import { ITransactionData } from "../@types/transaction";
import { instanceAxios } from "./instanceAxios";

import { dateFormatter, priceFormatter } from "../utils/formatter";
import { SerializableParam } from "recoil";

// type GetTransactions = {
//   query?: string;
// };

export class requestsAPI {
  static getAllTransactions(query?: string) {
    const url = new URL(`${import.meta.env.VITE_API_URL}/transactions`);

    console.log(query);

    if (query) {
      url.searchParams.append("q", query);
      console.log(url);
    }

    const transactions = instanceAxios
      .get<ITransactionData[]>(url.href)
      .then((data) =>
        data.data.map((transaction) => ({
          id: transaction.id,
          title: transaction.title,
          category: transaction.category,
          type: transaction.type,
          formattedPrice: priceFormatter.format(transaction.price),
          formattedDate: dateFormatter.format(new Date(transaction.created_at)),
          date: transaction.created_at,
          price: transaction.price,
        }))
      )
      .catch((error) => {
        console.log(error);
        // return [];
      });

    return transactions;
  }

  // static async getAllTransactions(query?: SerializableParam) {
  //   const url = new URL(`${import.meta.env.VITE_API_URL}/transactions`);

  //   if (query) {
  //     url.searchParams.append("q", String(query));
  //     console.log(url);
  //   }

  //   const result = fetch(url)
  //     .then((response) => response.json())
  //     .then((data: ITransactionData) =>
  //       data.transactions.map((transaction) => ({
  //         id: transaction.id,
  //         title: transaction.title,
  //         category: transaction.category,
  //         type: transaction.type,
  //         formattedPrice: priceFormatter.format(transaction.price),
  //         formattedDate: dateFormatter.format(new Date(transaction.created_at)),
  //         date: transaction.created_at,
  //         price: transaction.price,
  //       }))
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //       // return [];
  //     });

  //   return result;
  // }
}
