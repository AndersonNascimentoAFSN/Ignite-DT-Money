import styled from "styled-components";

export const InputContainer = styled.input`
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