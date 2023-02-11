export interface ITransactionData {
  transactions: {
    id: string;
    title: string;
    category: string;
    type: string;
    price: number;
    created_at: string;
  }[];
}

export interface ITransactionFormatted {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  formattedPrice: string;
  date: string;
  formattedDate: string;
}
