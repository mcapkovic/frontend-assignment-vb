import styled from 'styled-components'
import theme from '@client/theme'

interface IButton {
  primary?: boolean;
}

export const ButtonBase = styled.button<IButton>`
  background-color: ${(props) => (props.primary ? theme.colors.primary : 'transparent')};
  font-weight: ${theme.weight.bold};
  color: ${(props) => (props.primary ? theme.colors.white : theme.colors.textGray)};
  border: none;
  border-radius: ${theme.borderRadiusButton};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props) => (props.primary ? theme.colors.primaryHover : theme.colors.black5)};
  }
`

export const Button = styled(ButtonBase)`
  padding: 12px 42px;
`
