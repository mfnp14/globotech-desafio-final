import styled from "styled-components";

export const IconLogo = styled.div`
  height: 50vh;
`;

export const LogoNav = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & .iconLogo {
    margin-top: 10px;
  }
`;

export const LogoDetailBrand = styled.h2`
  font-size: 100pt;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #ffc300;
`;
