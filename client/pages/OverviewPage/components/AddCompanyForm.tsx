import { useForm } from "react-hook-form";
import { GRAPHQL_MAX_INT } from "graphql";

// styles
import { Button } from "@client/core/ButtonStyles";
import { Footer, Form } from "./AddCompanyFormStyles";
import { Label, Error, Field, FieldWrapper } from "@client/core/FieldStyles";

const SECTORS = ["Fintech", "IOT", "Roboadvisory", "Insuretech"];
const STAGES = [
  "Idea",
  "Prototype",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
];

interface Props {
  onSubmit: (data: any) => void;
  onClose: () => void;
}

function AddCompanyForm(props: Props) {
  const { onSubmit, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">Company name</Label>
      <Field
        id="name"
        type="text"
        placeholder="Company name"
        {...register("name", {
          required: { value: true, message: "Field is required" },
          minLength: { value: 3, message: "Min length is 3" },
          maxLength: { value: 80, message: "Max length is 80" },
        })}
      />
      {errors.name ? <Error>{errors.name.message}</Error> : null}

      <Label htmlFor="stage" gap>
        Stage
      </Label>
      <Field
        as="select"
        id="stage"
        {...register("stage", {
          required: true,
          validate: (value) =>
            value === "default" ? "Field is required" : undefined,
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
      </Field>
      {errors.stage ? <Error>{errors.stage.message}</Error> : null}

      <Label htmlFor="sector" gap>
        Sector
      </Label>
      <Field
        as="select"
        id="sector"
        placeholder="sfadfafasfas"
        {...register("sector", {
          required: true,
          validate: (value) =>
            value === "default" ? "Field is required" : undefined,
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
      </Field>
      {errors.sector ? <Error>{errors.sector.message}</Error> : null}

      <Label htmlFor="investmentSize" gap>
        Sector
      </Label>
      <FieldWrapper data-suffix='EUR'>
        <Field
          id="investmentSize"
          type="number"
          placeholder="Enter amount"
          {...register("investmentSize", {
            required: { value: true, message: "Field is required" },
            max: {
              value: GRAPHQL_MAX_INT,
              message: `Max amount is ${GRAPHQL_MAX_INT}`,
            },
          })}
        />
      </FieldWrapper>
      {errors.investmentSize ? (
        <Error>{errors.investmentSize.message}</Error>
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
  );
}

export default AddCompanyForm;
