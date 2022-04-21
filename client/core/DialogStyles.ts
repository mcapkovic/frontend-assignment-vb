import styled from 'styled-components'
import {ButtonBase} from '@client/core/ButtonStyles'
import theme from '@client/theme'

export const Header = styled.div`
  padding: 30px 108px 30px 40px;
  position: relative;
  background-color: ${theme.colors.black3};
`

export const Title = styled.div`
  font-size: 22px;
  font-weight: ${theme.weight.extraBold};
`

export const Description = styled.div`
  font-size: 13px;
  margin-top: 5px;
  color: ${theme.colors.textGray};
`

export const Close = styled(ButtonBase)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
`

export const Content = styled.div`
  padding: 40px;
`
