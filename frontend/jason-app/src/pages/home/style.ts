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
`;

export const HomeTitle = styled.h1`
  font-size: 2.5rem;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 50px;
  width: 80vw;
`;
