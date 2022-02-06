import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from "../../assets/close.svg";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        onClick={onRequestClose}
        type="button"
      >
        <img src={closeImg} alt="Fechar Transações" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Titulo"></input>
        <input type="number" placeholder="Valor"></input>
        <input placeholder="Categoria"></input>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
