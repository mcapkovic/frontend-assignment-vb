// utils
import {ChartDataItem} from '@client/utils/helpers'

// styles
import {Section} from '@client/core/LayoutStyles'
import {
  ChartWrapper,
  SectionRow,
  Legends,
  Dot,
  Item,
} from './ChartSectionStyles'

// components
import PieChart from './PieChart'

interface Props {
  data: ChartDataItem[];
}

function ChartSection(props: Props) {
  const {data} = props
  return (
    <Section>
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
    </Section>
  )
}

export default ChartSection
