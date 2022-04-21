// icons
import { ReactComponent as FintechIcon } from "@assets/icons/fintech.svg";
import { ReactComponent as InsuranceIcon } from "@assets/icons/insurance.svg";
import { ReactComponent as RobotIcon } from "@assets/icons/robot.svg";
import { ReactComponent as IotIcon } from "@assets/icons/iot.svg";

// types
import { ChartTableItem } from "../OverviewPage";

// components
import Table from "./Table";

interface Props {
  data: ChartTableItem[];
}

function TableSection(props: Props) {
  const { data } = props;
  return (
    <>
      <h1>Companies overview</h1>
      <Table data={data} />
    </>
  );
}

export default TableSection;
