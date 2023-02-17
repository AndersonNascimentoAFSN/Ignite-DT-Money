import { useRecoilState } from "recoil";
import { transactionsStore } from "../store/transactions";

import { requestsAPI } from "../services/requestsAPI";

import { ITransactionFormatted } from "../@types/transaction";
import { useEffect, useState } from "react";

export function useTransactions(query?: string) {
  // const [transactions, setTransactions] =
  //   useRecoilState<ITransactionFormatted[]>(transactionsStore);

  // const [transactionsLoading, setTransactionsLoading] = useState(false);
  // const [transactionsError, setTransactionsError] = useState("");

  // useEffect(() => {
  //   const getTransactions = async () => {
  //     setTransactionsLoading(true);
  //     const transactionsData = await requestsAPI.getAllTransactions(query);
  //     setTransactions(transactionsData ? transactionsData : []);
  //     setTransactionsLoading(false);
  //   };
  //   getTransactions();
  // }, [query]);

  // return { transactions, transactionsLoading, transactionsError };
}
