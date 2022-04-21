import {useForm} from 'react-hook-form'
import {GRAPHQL_MAX_INT} from 'graphql'

// styles
import {Button} from '@client/core/ButtonStyles'
import {
  Label,
  Error,
  Field,
  FieldWrapper,
  SelectField,
} from '@client/core/FieldStyles'
import {Footer, Form} from './AddCompanyFormStyles'

const SECTORS = ['Fintech', 'IOT', 'Roboadvisory', 'Insuretech']
const STAGES = [
  'Idea',
  'Prototype',
  'Seed',
  'Series A',
  'Series B',
  'Series C',
]

const FIELD_NAMES = {
  NAME: 'name',
  STAGE: 'stage',
  SECTOR: 'sector',
  INVESTMENT_SIZE: 'investmentSize',
}

const MESSAGES = {
  IS_REQUIRED: 'Field is required',
}

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: any) => void;
  onClose: () => void;
}

function AddCompanyForm(props: Props) {
  const {onSubmit, onClose} = props

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor={FIELD_NAMES.NAME}>Company name</Label>
      <Field
        id={FIELD_NAMES.NAME}
        type="text"
        placeholder="Company name"
        {...register(FIELD_NAMES.NAME, {
          required: {value: true, message: MESSAGES.IS_REQUIRED},
          minLength: {value: 3, message: 'Min length is 3'},
          maxLength: {value: 80, message: 'Max length is 80'},
        })}
      />
      {errors[FIELD_NAMES.NAME] ? (
        <Error>{errors[FIELD_NAMES.NAME].message}</Error>
      ) : null}

      <Label htmlFor={FIELD_NAMES.STAGE} gap>
        Stage
      </Label>
      <SelectField
        id={FIELD_NAMES.STAGE}
        {...register(FIELD_NAMES.STAGE, {
          required: true,
          validate: (value) => (value === 'default' ? MESSAGES.IS_REQUIRED : undefined),
        })}
      >
        <option value="default" disabled selected>
          Select stage from list
        </option>
        {STAGES.map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </SelectField>
      {errors[FIELD_NAMES.STAGE] ? (
        <Error>{errors[FIELD_NAMES.STAGE].message}</Error>
      ) : null}

      <Label htmlFor={FIELD_NAMES.SECTOR} gap>
        Sector
      </Label>
      <SelectField
        id={FIELD_NAMES.SECTOR}
        {...register(FIELD_NAMES.SECTOR, {
          required: true,
          validate: (value) => (value === 'default' ? MESSAGES.IS_REQUIRED : undefined),
        })}
      >
        <option value="default" disabled selected>
          Select sector from list
        </option>
        {SECTORS.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </SelectField>
      {errors[FIELD_NAMES.SECTOR] ? (
        <Error>{errors[FIELD_NAMES.SECTOR].message}</Error>
      ) : null}

      <Label htmlFor={FIELD_NAMES.INVESTMENT_SIZE} gap>
        Sector
      </Label>
      <FieldWrapper data-suffix="EUR">
        <Field
          id={FIELD_NAMES.INVESTMENT_SIZE}
          type="number"
          placeholder="Enter amount"
          {...register(FIELD_NAMES.INVESTMENT_SIZE, {
            required: {value: true, message: MESSAGES.IS_REQUIRED},
            max: {
              value: GRAPHQL_MAX_INT,
              message: `Max amount is ${GRAPHQL_MAX_INT}`,
            },
          })}
        />
      </FieldWrapper>
      {errors[FIELD_NAMES.INVESTMENT_SIZE] ? (
        <Error>{errors[FIELD_NAMES.INVESTMENT_SIZE].message}</Error>
      ) : null}

      <Footer>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" primary>
          Add company
        </Button>
      </Footer>
    </Form>
  )
}

export default AddCompanyForm
