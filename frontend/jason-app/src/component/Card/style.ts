import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  height: auto;
  row-gap: 100px;
  column-gap: 8px;
`;

export const CardContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  border-radius: 25px;
  & img {
    border-radius: 25px 25px 0 0;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  padding-bottom: 50px;
  border-radius: 25px 25px 0 0;
  position: relative;
  > h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 30px;
    color: #ffffff;
    width: 100%;
    text-align: center;
    letter-spacing: 0.05em;
    margin-top: 20px;
    height: 40px;
  }
  > svg {
    padding-left: 30px;
    margin-top: 30px;
    align-self: flex-start;
    color: #fff;
    font-size: 20px;
  }
`;

export const CardLogo = styled.div`
  display: flex;
  position: relative;
  height: 130px;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  top: -20px;
  margin: 0 auto;
  & img {
    border-radius: 100%;
    position: absolute;
    max-width: 100%;
    height: 100%;
`;

export const CardBottom = styled.div`
  background: #ffffff;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  > p {
    width: 100%;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: flex-start;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.05em;
    color: #25282b;
    margin-bottom: 20px;
  }
`;
