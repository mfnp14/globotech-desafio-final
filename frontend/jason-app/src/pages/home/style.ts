import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100%;
  max-width: 100%;
  margin-bottom: 50px;
`;

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin-bottom: 30px;
  margin-top: 10px;

  & p {
    font-size: 20px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 25px;
  width: 80vw;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #7d7d7d;
  font-weight: lighter;
  padding-bottom: 10px;
  border-bottom: 1px solid #7d7d7d;
  width: 100%;
`;

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
  }
`;
