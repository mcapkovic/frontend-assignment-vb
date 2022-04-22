import styled from 'styled-components'

// styles
import theme from '@client/theme'

export const TableWrapper = styled.div`
  overflow-x: auto;
`

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: ${theme.borderRadius};
  overflow: hidden;
  border: 2px solid ${theme.colors.white2}; ;
`

export const HeaderRow = styled.tr`
  background-color: ${theme.colors.white5};
`

interface IHeaderCell {
  width?: string;
}

export const HeaderCell = styled.th<IHeaderCell>`
  padding: 21px 30px;
  text-align: ${(props) => props.align};
  width: ${(props) => props?.width || 'auto'};
  font-size: 10px;
  color: ${theme.colors.grayBlue};
  font-weight: ${theme.weight.normal};
`

export const TableRow = styled.tr`
  transition: background-color 200ms;

  &:hover {
    background-color: ${theme.colors.white1};
  }
  &:nth-child(even) {
    background-color: ${theme.colors.white2};
    &:hover {
      background-color: ${theme.colors.white3};
    }
  }
`

export const TableCell = styled.td`
  padding: 21px 30px;
  text-align: ${(props) => props.align};
  font-weight: ${theme.weight.medium};
`
