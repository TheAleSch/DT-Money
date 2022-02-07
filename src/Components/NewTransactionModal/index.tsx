import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  //States

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };
    api.post("/transactions", data);
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          value={title}
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="number"
          value={value}
          placeholder="Valor"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            activeColor="red"
            onClick={() => {
              setType("deposit");
            }}
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === "withdraw"}
            activeColor="green"
            onClick={() => {
              setType("withdraw");
            }}
            type="button"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          value={category}
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
