import styled from "styled-components";

export const ModalContentContainer = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: solid 1px black;
  padding-bottom: 10px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  @media (max-width: 568px) {
    font-size: 1.2rem;
  }
`;

export const CloseButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  background: none;
  font-size: var(--font-large);
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  width: 100%;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
