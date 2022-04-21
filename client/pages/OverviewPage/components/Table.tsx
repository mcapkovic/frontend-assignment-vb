// types
import {ChartTableItem} from '@client/utils/helpers'

// styles
import {
  StyledTable,
  Cell,
  HeaderCell,
  HeaderRow,
  TableRow,
} from './TableStyles'

interface Props {
  data: ChartTableItem[];
}

function Table(props: Props) {
  const {data} = props
  return (
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
            <Cell>{company.name}</Cell>
            <Cell align="right">{company.stage}</Cell>
            <Cell align="right">{company.sector}</Cell>
            <Cell align="right">{company.investmentSizeFormatted}</Cell>
          </TableRow>
        )) ?? null}
      </tbody>
    </StyledTable>
  )
}

export default Table
