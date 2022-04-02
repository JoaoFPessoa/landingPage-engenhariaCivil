import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
`;

export const Img = styled.img`
  width: 95%;
  height: 480px;
  border-radius: 10px;
  @media (max-width: 600px) {
    height: 300px;
  }
`;
export const Text = styled.p`
  color: white;
  position: absolute;
  bottom: 8px;
  left: 4rem;
  max-width: 200px;
  text-align: left;
  @media (max-width: 768px) {
    display: none;
  }
  img {
    margin-right: 60px;
  }
`;
