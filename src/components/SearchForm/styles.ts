import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: ${(props) => props.theme.spaces[16]};
`;

export const Input = styled.input`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme.colors["gray-900"]};
  color: ${(props) => props.theme.colors["gray-300"]};
  padding: ${(props) => props.theme.spaces[16]};

  &::placeholder {
    color: ${(props) => props.theme.colors["gray-500"]};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spaces[12]};

  border: 0;
  padding: ${(props) => props.theme.spaces[16]};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors["green-300"]};
  color: ${(props) => props.theme.colors["green-300"]};
  font-weight: ${(props) => props.theme.fonts.weights.bold};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.colors["green-500"]};
    border: 1px solid ${(props) => props.theme.colors["green-500"]};
    color: ${(props) => props.theme.colors["white"]};
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  }
`;
