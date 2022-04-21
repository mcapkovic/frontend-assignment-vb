import {useMemo} from 'react'
import {useQuery} from '@apollo/client'
import {colorSchemes} from '@nivo/colors'
import styled from 'styled-components'
import {GET_COMPANIES, CompanyType} from '@client/graphql'

// utils
import {getCompaniesData} from '@client/utils/helpers'

// components
import SectorsSection from './components/SectorsSection'
import ChartSection from './components/ChartSection'
import TableSection from './components/TableSection'
import AddCompany from './components/AddCompany'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 120px;
`

const LoadingDiv = styled.div`
  text-align: center;
`

export function OverviewPage() {
  const {loading, error, data} = useQuery<{ companies: CompanyType[] }>(
    GET_COMPANIES
  )

  const overviewData = useMemo(
    () => getCompaniesData(data, loading, error),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  if (loading) {
    return <LoadingDiv>Loading data...</LoadingDiv>
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    )
  }

  return (
    <Container>
      <SectorsSection sectors={overviewData.sectorsCount} />
      <ChartSection data={overviewData.chartData} />
      <TableSection data={overviewData.tableData} />
      <AddCompany />
    </Container>
  )
}

export default OverviewPage
