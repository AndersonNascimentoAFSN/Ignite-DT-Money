import { useRecoilValue } from "recoil";

import { transactionsStore } from "../store/transactions";

export function useTransactions() {
  return useRecoilValue(transactionsStore);
}
