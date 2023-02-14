import { useRecoilValue } from "recoil";
import { transactionsAsync } from "../store/transactions";

export function useTransactionsAsync() {
  return useRecoilValue(transactionsAsync);
}
