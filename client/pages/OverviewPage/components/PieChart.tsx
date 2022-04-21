// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import { Count, Label } from "./PieChartStyles";

const CenteredMetric = ({ dataWithArc, centerX, centerY }: any) => {
  let total = 0;
  dataWithArc.forEach((datum: any) => {
    total += datum.value;
  });
  return (
    <>
      <Count
        x={centerX}
        y={centerY - 15}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {dataWithArc.length}
      </Count>
      <Label
        x={centerX}
        y={centerY + 15}
        textAnchor="middle"
        dominantBaseline="central"
      >
        companies
      </Label>
    </>
  );
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = (props: any /* see data tab */) => (
  <ResponsivePie
    data={props.data}
    margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
    innerRadius={0.7}
    activeOuterRadiusOffset={8}
    theme={{
      tooltip: {
        container: {
          background: "#333",
        },
      },
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    layers={["arcs", "legends", CenteredMetric]}
    colors={{ datum: "data.color" }}
  />
);

export default PieChart;
