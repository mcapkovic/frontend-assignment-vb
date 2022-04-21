// icons
import { ReactComponent as FintechIcon } from "@assets/icons/fintech.svg";
import { ReactComponent as InsuranceIcon } from "@assets/icons/insurance.svg";
import { ReactComponent as RobotIcon } from "@assets/icons/robot.svg";
import { ReactComponent as IotIcon } from "@assets/icons/iot.svg";

// styles
import { StyledTable, Cell, HeaderCell, HeaderRow, TableRow } from "./TableStyles";

// types
import { ChartTableItem } from "../OverviewPage";

interface Props {
  data: ChartTableItem[];
}

function Table(props: Props) {
  const { data } = props;
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
  );
}

export default Table;
