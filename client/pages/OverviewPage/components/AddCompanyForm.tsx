import theme from "@client/theme";
import { useForm } from "react-hook-form";
import { ADD_COMPANY, GET_COMPANIES, NewCompany } from "@client/graphql";

// core
import { Button } from "@client/core/ButtonStyles";

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
}

function AddCompanyForm(props: Props) {
  const { onSubmit } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Company name</label>
      <input
        id="name"
        type="text"
        placeholder="Company name"
        {...register("name", {
          required: { value: true, message: "Is required" },
          minLength: { value: 3, message: "Min length is 3" },
          maxLength: { value: 80, message: "Max length is 80" },
        })}
      />
      {errors.name ? <div>{errors.name.message}</div> : null}

      <label htmlFor="stage">Stage</label>
      <select id="stage" {...register("stage", { required: true })}>
        {STAGES.map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>
      {errors.stage ? <div>{errors.stage.message}</div> : null}

      <label htmlFor="sector">Sector</label>
      <select id="sector" {...register("sector", { required: true })}>
        {SECTORS.map((sector) => (
          <option key={sector} value={sector}>
            {sector}
          </option>
        ))}
      </select>
      {errors.sector ? <div>{errors.sector.message}</div> : null}

      <label htmlFor="investmentSize">Sector</label>
      <input
        id="investmentSize"
        type="number"
        placeholder="Enter amount"
        {...register("investmentSize", {
          required: { value: true, message: "Is required" },
          maxLength: { value: 80, message: "Max length is 80" },
        })}
      />
      {errors.investmentSize ? (
        <div>{errors.investmentSize.message}</div>
      ) : null}

      <input type="submit" />
    </form>
  );
}

export default AddCompanyForm;
