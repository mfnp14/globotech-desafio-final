import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
  align-items: center;
  background-color: #ffc300;
  width: 60%;
  border-radius: 10px;
  padding: 10px;
  height: 200px;
  box-shadow: -1px 14px 27px -18px rgba(72, 72, 72, 0.8);
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
`;

export const MenuItem = styled.li`
  padding: 5px;
  display: flex;
  align-items: center;

  &:first-of-type {
    font-weight: bold;
    font-size: 2rem;
  }
`;

export const MenuPrice = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  display: flex;

  & img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`;
