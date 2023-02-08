import { SummaryCard } from "../SummaryCard";
import { SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard title="Entradas" value={17400} type="entries"/>
      <SummaryCard title="Saídas" value={17400} type="outflows"/>
      <SummaryCard title="Total" value={17400} type="total"/>
    </SummaryContainer>
  )
}
