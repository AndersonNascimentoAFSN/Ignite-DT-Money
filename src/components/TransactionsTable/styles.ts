import styled, { css } from "styled-components";

export const TransactionsTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
`;

export const TransactionsTableBody = styled.tbody``;

export const TransactionsTableTr = styled.tr``;

export const TransactionsTableTd = styled.td`
  padding: 1.25rem 2rem;
  background: ${(props) => props.theme.colors["gray-700"]};
  color: ${(props) => props.theme.colors["gray-300"]};

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 50%;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

type PriceHighlightProps = {
  variant: "income" | "outcome";
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  ${(props) =>
    props.variant === "income" &&
    css`
      color: ${(props) => props.theme.colors["green-300"]};
    `}

  ${(props) =>
    props.variant === "outcome" &&
    css`
      color: ${(props) => props.theme.colors["red-300"]};
    `}
`;
