import styled from "styled-components";

export const GenericButtonContainer = styled.span`
  button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    .label {
      margin-left: 5px;
    }
  }

  button:disabled {
    cursor: not-allowed;
  }

  button.primary {
    background-color: #ff1818;
    border: 1px solid #ff1818;
    border-radius: 8px;
    transition-delay: 70ms;
    width: 150px;
    padding: 12px 14px 12px 14px;
    color: #ececec;
    cursor: pointer;
    width: 170px;

    &:hover {
      background-color: white;
      border-radius: 8px;
      transition-delay: 70ms;
      cursor: pointer;
      color: #ff1818;
    }
  }

  button.secondary {
    background-color: #fff;
    border: 1px solid #ffc300;
    border-radius: 8px;
    transition-delay: 70ms;
    width: 170px;
    padding: 12px 14px 12px 14px;
    color: #ffc300;

    cursor: pointer;

    &:hover {
      background-color: #ffc300;
      border-radius: 8px;
      transition-delay: 70ms;
      cursor: pointer;
      color: #fff;
    }
  }

  button.link {
    text-decoration: underline;
  }
`;
