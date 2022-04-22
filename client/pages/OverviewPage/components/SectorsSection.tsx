// icons
import {ReactComponent as FintechIcon} from '@assets/icons/fintech.svg'
import {ReactComponent as InsuranceIcon} from '@assets/icons/insurance.svg'
import {ReactComponent as RobotIcon} from '@assets/icons/robot.svg'
import {ReactComponent as IotIcon} from '@assets/icons/iot.svg'

// styles
import {Section} from '@client/core/LayoutStyles'
import {
  SectionRow,
  SectionItem,
  Counter,
  Count,
  Icon,
  Name,
} from './SectorsSectionStyles'

const SECTORS = [
  {name: 'Fintech', icon: FintechIcon},
  {name: 'Insuretech', icon: InsuranceIcon},
  {name: 'Roboadvisory', icon: RobotIcon},
  {name: 'IOT', icon: IotIcon},
]

interface Props {
  sectors: { [key: string]: number };
}

function SectorsSection(props: Props) {
  const {sectors} = props
  return (
    <Section>
      <h1>Companies by sectors</h1>
      <SectionRow>
        {SECTORS.map((sector) => {
          const {name, icon: IconComponent} = sector
          return (
            <SectionItem key={name}>
              <Counter>
                <Count>{sectors[name] || 0}</Count>
                <Name>{name}</Name>
              </Counter>
              <Icon>
                <IconComponent />
              </Icon>
            </SectionItem>
          )
        })}
      </SectionRow>
    </Section>
  )
}

export default SectorsSection
