import styled from "styled-components";

export const ContainerLanding = styled.div`
  display: flex;
  width: 80vw;
  margin-top: 10%;
  margin-left: 8%;
  margin-right: 8%;
  justify-content: space-between;
`;

export const ContentBrand = styled.div`
  width: 42vw;
  margin-left: 6%;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoDetailBrand = styled.h2`
  font-size: 154pt;
  color: #5463ff;
  margin-right: 1%;
`;

export const BrandName = styled.div`
  margin-top: 2%;
  text-align: left;
`;

export const FirstName = styled.h4`
  margin-top: 10%;
  font-size: 42pt;
  color: #ffc300;
  margin-bottom: 0;
  font-weight: bold;
`;

export const LastName = styled.h4`
  font-size: 84pt;
  color: #ff1818;
  margin-top: -20px;
  font-weight: bold;
`;

export const SloganText = styled.p`
  font-style: italic;
  font-size: 12pt;
  font-weight: 100;
  width: 74%;
  margin-top: 2%;
  margin-bottom: 1%;
  margin-left: 2%;
  color: #868686;
`;

export const DescriptionText = styled.p`
  font-size: 14pt;
  width: 94%;
  color: #868686;
  font-weight: 200;
  margin-left: 2%;
`;

export const ContentButton = styled.div`
  display: flex;
  width: 38%;
  margin-top: 4%;
  margin-left: 2%;
  justify-content: space-around;
  column-gap: 10%;
`;

export const ButtonPrimaryLanding = styled.button`
  background-color: #ff1818;
  border: 1px solid #ff1818;
  border-radius: 8px;
  transition-delay: 70ms;
  width: 150px;

  & :hover {
    background-color: white;
    border-radius: 8px;
    transition-delay: 70ms;
    cursor: pointer;
    color: #ff1818;
  }
`;

export const TextButtonPrimaryLanding = styled.p`
  padding: 12px 14px 12px 14px;
  color: #ececec;
  cursor: pointer;
`;

export const ButtonSecondaryLanding = styled.button`
  background-color: none;
  border: 1px solid #ffc300;
  border-radius: 8px;
  transition-delay: 70ms;
  width: 150px;

  & :hover {
    background-color: #ffc300;
    border-radius: 8px;
    transition-delay: 70ms;
    cursor: pointer;
    color: #fff;
  }
`;

export const TextButtonSecondaryLanding = styled.p`
  padding: 12px 14px 12px 14px;
  color: #ffc300;
  cursor: pointer;
`;

export const ImagePromotional = styled.img`
  height: 50vh;
  width: 28vw;
`;
