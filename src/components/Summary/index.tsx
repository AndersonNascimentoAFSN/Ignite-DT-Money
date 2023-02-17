import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";
import { SummaryCard } from "../SummaryCard";
import { SummaryContainer } from "./styles";

export function Summary() {
  const summary = useTransactionsSummary();

  return (
    <SummaryContainer>
      <SummaryCard title="Entradas" value={summary?.income} type="entries" />
      <SummaryCard title="Saídas" value={summary?.outcome} type="outflows" />
      <SummaryCard title="Total" value={summary?.total} type="total" />
    </SummaryContainer>
  );
}
