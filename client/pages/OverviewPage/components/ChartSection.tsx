import PieChart from "./PieChart";
import { ChartDataItem } from "../OverviewPage";
import {
  ChartWrapper,
  SectionRow,
  Legends,
  Dot,
  Item,
} from "./ChartSectionStyles";

interface Props {
  data: ChartDataItem[];
}

function ChartSection(props: Props) {
  const { data } = props;
  return (
    <div>
      <h1>Companies by investment size</h1>
      <SectionRow>
        <ChartWrapper>
          <PieChart data={data} />
        </ChartWrapper>

        <Legends>
          {data.map((item) => (
            <Item key={item.id}>
              <Dot color={item.color} />
              {item.label}
            </Item>
          ))}
        </Legends>
      </SectionRow>
    </div>
  );
}

export default ChartSection;
