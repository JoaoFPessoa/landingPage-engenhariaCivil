import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  padding: 7px;
  background: #00e174;
  border-radius: 100px;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const FirstArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-right: 5rem;
  color: white;
  align-items: center;
  text-align: left;
  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: white;
  }
  p {
    margin-left: 3rem;
  }
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.8rem;
      width: 300px;
      margin-bottom: 1rem;
    }
  }
`;
export const LastArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-right: 5rem;
  color: white;
  text-align: left;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: white;
  }
  li {
    margin-bottom: 5px;
    margin-left: 4rem;
  }
  @media (max-width: 600px) {
    width: 99%;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1rem;
    }
    li {
      font-size: 0.8rem;
      width: 300px;
    }
  }
`;
