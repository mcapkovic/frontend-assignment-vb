import styled from "styled-components";
import theme from "@client/theme";

interface IButton {
  primary?: boolean;
}

export const Button = styled.button<IButton>`
  padding: 12px 42px;
  background-color: ${(props) => props.primary? theme.colors.primary: theme.colors.grayBlue};
  font-weight: ${theme.weight.bold};
  color: ${theme.colors.white};
  border: none;
  border-radius:  ${theme.borderRadiusButton};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover{
    background-color: ${(props) => props.primary? theme.colors.primaryHover: theme.colors.grayBlue};
  }
`;

