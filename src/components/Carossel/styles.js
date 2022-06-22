import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-right: 4rem;
  @media (max-width: 768px) {
    padding: 0;
    margin-top: 2rem;
  }
`;

export const Picture = styled.img`
  height: 800px;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 768px) {
    height: 500px;
  }
`;
