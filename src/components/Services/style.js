import styled from "styled-components";

export const Container = styled.div`
  margin-top: 7rem;
  @media (max-width: 600px) {
    margin-top: 3rem;
  }
`;
export const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #00e174;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;
export const ImagesFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`;

export const ImgContainer = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Texts = styled.p`
  width: 300px;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;
