import styled from 'styled-components'
import theme from '@client/theme'

interface ILabel {
  gap?: boolean;
}

export const Label = styled.label<ILabel>`
  font-size: 13px;
  font-weight: ${theme.weight.semiBold};
  margin-top: ${(props) => (props.gap ? '20px' : 0)};
  margin-bottom: 5px;
`

export const Error = styled.div`
  font-size: 13px;
  color: ${theme.colors.red};
  margin-top: 5px;
`

export const Field = styled.input`
  padding: 11.5px 15px;
  color: ${theme.colors.textGray};
  background-color: ${theme.colors.bg};
  border: 1px solid ${theme.colors.textGray};
  font-size: 15px;
  border-radius: 4px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${theme.colors.textGray};
    opacity: 1; /* Firefox */
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`

export const SelectField = styled(Field).attrs(() => ({as: 'select'}))``

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &[data-suffix]::after {
    content: attr(data-suffix);
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 15px;
  }
`
