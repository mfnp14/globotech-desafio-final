import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: #ffc300;
  border: 1px solid #ffc300;
  border-radius: 8px;
  transition-delay: 70ms;
  color: #fff;
  padding: 10px 30px 10px 30px;

  &:hover {
    background-color: #5463ff;
    border: 1px solid white;
    transition-delay: 70ms;
    cursor: pointer;
  }`;

  export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-width: 100%;
  margin-bottom: 50px;
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