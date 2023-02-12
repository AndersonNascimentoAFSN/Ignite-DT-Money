import { useTransactionsSummary } from "../../hooks/useTransactionsSummary";
import { SummaryCard } from "../SummaryCard";
import { SummaryContainer } from "./styles";

export function Summary() {
  const { income, outcome, total } = useTransactionsSummary();

  return (
    <SummaryContainer>
      <SummaryCard title="Entradas" value={income} type="entries" />
      <SummaryCard title="Saídas" value={outcome} type="outflows" />
      <SummaryCard title="Total" value={total} type="total" />
    </SummaryContainer>
  );
}
