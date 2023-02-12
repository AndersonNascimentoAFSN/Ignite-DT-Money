import { priceFormatter } from "../../utils/formatter";

import {
  IconCardArrowCircleDown,
  IconCardArrowCircleUp,
  IconCardCurrencyDollar,
  SummaryCardContainer,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./styles";

type SummaryCardProps = {
  title: string;
  value: number;
  type: "entries" | "outflows" | "total";
};

export function SummaryCard({ title, value, type }: SummaryCardProps) {
  const valueFormatted = priceFormatter.format(value);

  return (
    <SummaryCardContainer value={value} type={type}>
      <SummaryCardHeader>
        <SummaryCardTitle>{title}</SummaryCardTitle>
        {type === "entries" && <IconCardArrowCircleUp />}
        {type === "outflows" && <IconCardArrowCircleDown />}
        {type === "total" && <IconCardCurrencyDollar />}
      </SummaryCardHeader>

      <SummaryCardValue>{valueFormatted}</SummaryCardValue>
    </SummaryCardContainer>
  );
}
