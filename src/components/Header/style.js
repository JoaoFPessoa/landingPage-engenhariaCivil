import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 768px) {
    height: 130px;
    align-items: center;
    justify-content: center;
  }
`;
export const Img = styled.img`
   {
    height: 13rem;
    width: 20rem;
    overflow-y: hidden;
    margin-top: -30px;
    @media (max-width: 768px) {
      width: 300px;
      height: 200px;
    }
  }
`;
export const NavBarContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-top: -20px;

  @media (max-width: 768px) {
    display: none;
  }

  .navbar-item {
    margin: 1rem;
    text-decoration: none;
    color: #b8b8b8;
  }
`;
