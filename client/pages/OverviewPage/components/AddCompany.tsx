import {useState} from 'react'
import Modal from 'react-modal'
import {useMutation} from '@apollo/client'
import {ADD_COMPANY, GET_COMPANIES, NewCompany} from '@client/graphql'

// icons
import {ReactComponent as CloseIcon} from '@assets/icons/close.svg'

// styles
import theme from '@client/theme'
import {
  Header, Title, Description, Close, Content,
} from '@client/core/DialogStyles'
import {Button} from '@client/core/ButtonStyles'
import {Row} from './AddCompanyStyles'

// components
import AddCompanyForm from './AddCompanyForm'

const customStyles = {
  content: {
    width: '640px',
    top: '50%',
    left: '50%',
    padding: '0',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.bg,
    height: 'fit-content',
  },
  overlay: {
    backgroundColor: 'rgba(14, 15, 17, 0.9)',
  },
}

function AddCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addCompany] = useMutation(ADD_COMPANY, {
    refetchQueries: [GET_COMPANIES],
  })

  const closeDialog = () => {
    setIsModalOpen(false)
  }

  const onSubmit = async (data: NewCompany) => {
    try {
      await addCompany({
        variables: {
          name: data.name,
          stage: data.stage,
          sector: data.sector,
          investmentSize: Number(data.investmentSize),
        },
      })
      setIsModalOpen(false)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  return (
    <Row>
      <Button primary onClick={() => setIsModalOpen(true)}>
        Add new company
      </Button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeDialog}
        shouldCloseOnOverlayClick
        appElement={document.getElementById('root') as HTMLElement}
      >
        <Header>
          <Title>Add new company</Title>
          <Description>
            Add new company by filling all the required fields, select from
            lists and be carefull, because integer is limited and not everyone
            can handle that
          </Description>
          <Close onClick={closeDialog}>
            <CloseIcon width="20px" />
          </Close>
        </Header>
        <Content>
          <AddCompanyForm onSubmit={onSubmit} onClose={closeDialog} />
        </Content>
      </Modal>
    </Row>
  )
}

export default AddCompany
