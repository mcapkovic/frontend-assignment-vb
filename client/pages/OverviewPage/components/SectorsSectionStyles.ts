import styled from 'styled-components'
import theme from '@client/theme'

export const SectionRow = styled.div`
  display: flex;
  gap: 17px;
  flex-wrap: wrap;
`

export const SectionItem = styled.div`
  display: flex;
  padding: 36px 30px;
  align-items: center;
  flex: 1 0 100px;
  max-width: 180px;
  justify-content: space-between;
  background-color: ${theme.colors.white3};
  border-radius: ${theme.borderRadius};
  transition:transform 200ms, background-color 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.white6};
    transform: scale(1.05)
  }
`

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Count = styled.div`
  font-size: 38px;
  color: ${theme.colors.white};
  font-weight: ${theme.weight.bold};
`

export const Name = styled.div`
  color: ${theme.colors.textGray};
  font-weight: ${theme.weight.semiBold};
`

export const Icon = styled.div`
  width: 55px;
  height: 55px;
`
