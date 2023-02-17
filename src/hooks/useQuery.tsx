import { useRecoilState } from "recoil";

import { queryAtom } from "../store/transactions";

export function useQuery() {
  const [query, setQuery] = useRecoilState(queryAtom);

  return {
    query,
    setQuery,
  };
}
