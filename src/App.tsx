import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import NewTransactionModal from "./Components/NewTransactionModal";
import { GlobalsStyle } from "./styles/globals";

export function App() {
  const [isModalTransactionsOpen, setIsModalTransactionsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsModalTransactionsOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsModalTransactionsOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isModalTransactionsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalsStyle />
    </>
  );
}
