import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
`;
export const Title = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: white;
  p {
    color: #00e174;
    font-size: 3.5rem;
    margin-left: 15px;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    p {
      font-size: 1.5rem;
      margin-left: 8px;
    }
  }
`;
export const Subtitle = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b8b8b8;
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
export const Article = styled.article`
  display: flex;
  margin-left: 5%;
  margin-right: 10%;
  margin-top: 5rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;
export const Img = styled.img`
  height: 450px;
  width: 500px;
  border-radius: 10px;
  @media (max-width: 600px) {
    height: 200px;
    width: 100%;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-left: 6.5rem;
  color: white;
  border-left: 1px solid white;
  height: 100%;
  padding-left: 50px;
  @media (max-width: 600px) {
    align-items: center;
    margin-left: 0;
    border: none;
    width: 380px;
  }
`;
export const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: #00e174;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-top: 2rem;
    border-bottom: 1px solid white;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }
`;
export const ArticleText = styled.p`
  margin-top: 1.5rem;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
  }
`;
