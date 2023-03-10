import { useQuery } from "react-query";

import { requestsAPI } from "../services/requestsAPI";

export function UseGetAllTransactions() {
  return useQuery(
    "allTransactions",
    async () => await requestsAPI.getAllTransactions()
  );
}
