import { ITransactionData } from "../@types/transaction";
import { instanceAxios } from "./instanceAxios";

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
          formattedPrice: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.price),
          formattedDate: Intl.DateTimeFormat("pt-BR", {}).format(
            new Date(transaction.created_at)
          ),
          date: transaction.created_at,
          price: transaction.price,
        }))
      )
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
}
