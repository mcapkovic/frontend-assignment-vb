// types
import {TableItem} from '@client/utils/helpers'

// styles
import {
  StyledTable,
  TableCell,
  HeaderCell,
  HeaderRow,
  TableRow,
  TableWrapper,
} from './TableStyles'

interface Props {
  data: TableItem[];
}

function Table(props: Props) {
  const {data} = props
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <HeaderRow>
            <HeaderCell align="left">Company name</HeaderCell>
            <HeaderCell align="right">stage</HeaderCell>
            <HeaderCell align="right">sector</HeaderCell>
            <HeaderCell align="right" width="40%">
              investment size
            </HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {data.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell align="right">{company.stage}</TableCell>
              <TableCell align="right">{company.sector}</TableCell>
              <TableCell align="right">{company.investmentSizeFormatted}</TableCell>
            </TableRow>
          )) ?? null}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default Table
