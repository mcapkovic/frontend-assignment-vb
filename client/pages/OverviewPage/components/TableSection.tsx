// types
import {ChartTableItem} from '../OverviewPage'

// components
import Table from './Table'

interface Props {
  data: ChartTableItem[];
}

function TableSection(props: Props) {
  const {data} = props
  return (
    <>
      <h1>Companies overview</h1>
      <Table data={data} />
    </>
  )
}

export default TableSection
