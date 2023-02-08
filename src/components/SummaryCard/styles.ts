import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

import styled, { css } from "styled-components";

type SummaryCardContainerProps = {
  value: number;
  type: "entries" | "outflows" | "total";
};

export const SummaryCardContainer = styled.div<SummaryCardContainerProps>`
  ${(props) => css`
    background: ${props.theme.colors["gray-600"]};
    padding: ${props.theme.spaces[32]};
  `}

  ${(props) =>
    props.value > 0 &&
    props.type === "total" &&
    css`
      background: ${props.theme.colors["green-700"]};
    `}
    
  ${(props) =>
    props.value < 0 &&
    props.type === "total" &&
    css`
      background: ${props.theme.colors["red-700"]};
    `}

  border-radius: 6px;
`;

export const SummaryCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors["gray-300"]};
`;

export const SummaryCardTitle = styled.span`
  color: ${(props) => props.theme.colors["gray-300"]};
  line-height: ${(props) => props.theme.fonts.lineHeight};
`;

export const SummaryCardValue = styled.strong`
  ${(props) => css`
    color: ${props.theme.colors["gray-100"]};
    margin-top: ${props.theme.spaces[16]};
    font-size: ${props.theme.fonts.sizes[32]};
    line-height: 140%;
  `}
  display: block;
`;

export const IconCardArrowCircleUp = styled(ArrowCircleUp).attrs((props) => ({
  size: 32,
  color: props.theme.colors["green-300"],
}))``;

export const IconCardArrowCircleDown = styled(ArrowCircleDown).attrs(
  (props) => ({
    size: 32,
    color: props.theme.colors["red-300"],
  })
)``;

export const IconCardCurrencyDollar = styled(CurrencyDollar).attrs((props) => ({
  size: 32,
  color: props.theme.colors["white"],
}))``;
