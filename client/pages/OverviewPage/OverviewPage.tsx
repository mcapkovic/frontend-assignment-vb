import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { colorSchemes } from "@nivo/colors";
import styled from "styled-components";
import { GET_COMPANIES, CompanyType } from "@client/graphql";
import SectorsSection from "./components/SectorsSection";
import ChartSection from "./components/ChartSection";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const LoadingDiv = styled.div`
  text-align: center;
`;

export interface ChartDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export function OverviewPage() {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(
    GET_COMPANIES
  );

  const overviewData = useMemo(() => {
    const newData: {
      sectorsCount: { [key: string]: number };
      tableData: CompanyType[];
      originalData: CompanyType[] | null;
      chartData: ChartDataItem[];
    } = { sectorsCount: {}, tableData: [], originalData: null, chartData: [] };

    if (loading || error) return newData;

    const companies = data?.companies || [];

    // add original data
    newData.originalData = companies;

    companies.forEach((company, index) => {
      // add sectors
      if (company.sector in newData.sectorsCount) {
        newData.sectorsCount[company.sector] += 1;
      } else {
        newData.sectorsCount[company.sector] = 1;
      }

      // add chart data
      newData.chartData.push({
        id: company.id,
        label: company.name,
        value: company.investmentSize,
        color: colorSchemes.nivo[index % colorSchemes.nivo.length],
      });
    });

    // add table data
    newData.tableData = companies;

    return newData;
  }, [data]);

  if (loading) {
    return <LoadingDiv>Loading data...</LoadingDiv>;
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    );
  }

  return (
    <Container>
      <SectorsSection sectors={overviewData.sectorsCount} />
      <ChartSection data={overviewData.chartData} />
      <h1>Companies overview</h1>
      <table>
        <thead>
          <tr>
            <th>company name</th>
            <th>stage</th>
            <th>sector</th>
            <th>investment size</th>
          </tr>
        </thead>
        <tbody>
          {overviewData.tableData.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.stage}</td>
              <td>{company.sector}</td>
              <td>{company.investmentSize}</td>
            </tr>
          )) ?? null}
        </tbody>
      </table>
    </Container>
  );
}

export default OverviewPage;
