import { useRecoilValue } from "recoil";
import { transactionsSummary } from "../store/transactions";

export function useTransactionsSummary() {
  return useRecoilValue(transactionsSummary);
}
