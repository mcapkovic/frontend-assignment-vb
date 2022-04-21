import { useState } from "react";
import Modal from "react-modal";
import theme from "@client/theme";
import { useMutation } from "@apollo/client";
import { ADD_COMPANY, GET_COMPANIES, NewCompany } from "@client/graphql";

// styles
import { Row } from "./AddCompanyStyles";

// components
import AddCompanyForm from "./AddCompanyForm";

// core
import { Button } from "@client/core/ButtonStyles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    padding: "0",
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.bg,
  },
  overlay: {
    backgroundColor: "rgba(14, 15, 17, 0.9)",
  },
};

function AddCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addCompany] = useMutation(ADD_COMPANY, {
    refetchQueries: [GET_COMPANIES],
  });

  const onSubmit = async (data: NewCompany) => {
    try {
      await addCompany({
        variables: {
          name: data.name,
          stage: data.stage,
          sector: data.sector,
          investmentSize: Number(data.investmentSize),
        },
      });
      setIsModalOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Row>
      <Button primary onClick={() => setIsModalOpen(true)}>
        Add new company
      </Button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick
        appElement={document.getElementById("root") as HTMLElement}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={() => setIsModalOpen(false)}>close</button>
        <AddCompanyForm onSubmit={onSubmit} />
      </Modal>
    </Row>
  );
}

export default AddCompany;
