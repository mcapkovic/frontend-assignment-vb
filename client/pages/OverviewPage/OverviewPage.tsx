import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_COMPANIES, CompanyType } from "@client/graphql";
import SectorsSection from "./components/SectorsSection";
import { useMemo } from "react";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const LoadingDiv = styled.div`
  text-align: center;
`;

export function OverviewPage() {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(
    GET_COMPANIES
  );

  const overviewData = useMemo(() => {
    const newData: {
      sectorsCount: { [key: string]: number };
      tableData: CompanyType[];
      originalData: CompanyType[] | null;
    } = { sectorsCount: {}, tableData: [], originalData: null };

    if (loading || error) return newData;

    const companies = data?.companies || [];
    companies.forEach((company) => {
      if (company.sector in newData.sectorsCount) {
        newData.sectorsCount[company.sector] += 1;
      } else {
        newData.sectorsCount[company.sector] = 1;
      }
    });

    newData.originalData = companies;
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
      <h1>Companies by investment size</h1>
      graf
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
