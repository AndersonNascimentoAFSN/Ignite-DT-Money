import { ITransactionData } from "../@types/transaction";
import { instanceAxios } from "./instanceAxios";

import { dateFormatter, priceFormatter } from "../utils/formatter";

export class requestsAPI {
  static async getAllTransactions() {
    return instanceAxios
      .get<ITransactionData>("/transactions")
      .then((data) =>
        data.data.transactions.map((transaction) => ({
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
  }
}
