import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  border: 1px solid #ffc300;
  border-radius: 10px;
  height: 130px;
  box-shadow: -1px 14px 27px -18px rgba(255, 195, 0, 0.75);
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MenuItem = styled.li`
  padding: 5px;
`;

export const MenuPrice = styled.span`
  font-size: 1.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  border: 1px solid #ffc300;
  border-radius: 10px;
`;
