import {useMemo} from 'react'
import {useQuery} from '@apollo/client'
import {colorSchemes} from '@nivo/colors'
import styled from 'styled-components'
import {GET_COMPANIES, CompanyType} from '@client/graphql'
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

export interface ChartDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface ChartTableItem extends CompanyType {
  investmentSizeFormatted: string;
}

export function OverviewPage() {
  const {loading, error, data} = useQuery<{ companies: CompanyType[] }>(
    GET_COMPANIES
  )

  const overviewData = useMemo(() => {
    const newData: {
      sectorsCount: { [key: string]: number };
      tableData: ChartTableItem[];
      originalData: CompanyType[] | null;
      chartData: ChartDataItem[];
    } = {
      sectorsCount: {}, tableData: [], originalData: null, chartData: [],
    }

    if (loading || error) return newData

    const companies = data?.companies || []

    // add original data
    newData.originalData = companies

    companies.forEach((company, index) => {
      // add sectors
      if (company.sector in newData.sectorsCount) {
        newData.sectorsCount[company.sector] += 1
      } else {
        newData.sectorsCount[company.sector] = 1
      }

      // add chart data
      newData.chartData.push({
        id: company.id,
        label: company.name,
        value: company.investmentSize,
        color: colorSchemes.nivo[index % colorSchemes.nivo.length],
      })

      // add chart data
      newData.tableData.push({
        ...company,
        investmentSizeFormatted: `${company.investmentSize
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} EUR`,
      })
    })

    return newData
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

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
