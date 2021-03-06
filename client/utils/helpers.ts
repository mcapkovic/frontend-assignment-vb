import {colorSchemes} from '@nivo/colors'
import {CompanyType} from '@client/graphql'

export interface ChartDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface TableItem extends CompanyType {
  investmentSizeFormatted: string;
}

interface CompaniesData {
  sectorsCount: { [key: string]: number };
  tableData: TableItem[];
  originalData: CompanyType[] | null;
  chartData: ChartDataItem[];
}

export function getCompaniesData(
  data: { companies: CompanyType[] } | undefined,
  loading: boolean,
  error: any
) {
  const newData: CompaniesData = {
    sectorsCount: {},
    tableData: [],
    originalData: null,
    chartData: [],
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
      // TODO add more colors
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
}
