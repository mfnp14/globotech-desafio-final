import React from "react";
import ReactDOM from "react-dom";
import {
  CloseButton,
  Content,
  Header,
  HeaderTitle,
  ModalContentContainer,
} from "./styles";

const showModal = (title: string, modalContent: React.ReactElement) => {
  const modalContainer = document.createElement("div");
  modalContainer.id = "global-modal-container";

  const modal = document.createElement("div");
  modal.id = "global-modal";

  modalContainer.appendChild(modal);

  document.body.appendChild(modalContainer);

  ReactDOM.render(
    <ModalContentContainer>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <CloseButton onClick={hideModal}>x</CloseButton>
      </Header>
      <Content>{modalContent}</Content>
    </ModalContentContainer>,
    modal
  );
};

const hideModal = () => {
  const modalContainer = document.getElementById("global-modal-container");
  if (modalContainer) {
    modalContainer.remove();
  }
};

export { showModal, hideModal };
