// types
import {TableItem} from '@client/utils/helpers'

// components
import Table from './Table'

interface Props {
  data: TableItem[];
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
