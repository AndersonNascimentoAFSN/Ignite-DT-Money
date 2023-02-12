import { useRecoilState } from "recoil";
import { transactionsStore } from "../store/transactions";

import { requestsAPI } from "../services/requestsAPI";

import { ITransactionFormatted } from "../@types/transaction";
import { useEffect, useState } from "react";

export function useTransactions() {
  const [transactions, setTransactions] =
    useRecoilState<ITransactionFormatted[]>(transactionsStore);

  const [transactionsLoading, setTransactionsLoading] = useState(false);
  const [transactionsError, setTransactionsError] = useState("");

  useEffect(() => {
    const getTransactions = async () => {
      setTransactionsLoading(true);
      const transactionsData = await requestsAPI.getAllTransactions();
      setTransactions(transactionsData);
      setTransactionsLoading(false);
    };
    getTransactions();
  }, []);

  return { transactions, transactionsLoading, transactionsError };
}
