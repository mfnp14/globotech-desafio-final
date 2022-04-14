import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #5463ff;
  height: 10vh;
  padding-left: 42px;
  padding-right: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
  cursor: pointer;

  & .iconLogo {
    margin-top: 6%;
  }
`;

export const LogoDetailBrand = styled.h2`
  font-size: 32pt;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #ffc300;
`;

export const InlineContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16vw;
  align-items: center;
  column-gap: 20px;
`;

export const ButtonPrimary = styled.button`
  background-color: #ffc300;
  border: 1px solid #ffc300;
  border-radius: 8px;
  transition-delay: 70ms;
  color: #fff;
  padding: 5px 10px 5px 10px;

  &:hover {
    background-color: #5463ff;
    border: 1px solid white;
    transition-delay: 70ms;
    cursor: pointer;
  }
`;

export const ButtonSecondary = styled.button`
  background-color: transparent;
  transition-delay: 70ms;
  border: none;
  color: #fff;

  &:hover {
    transition-delay: 70ms;
    cursor: pointer;
    color: #ffc300;
  }
`;
