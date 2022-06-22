import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .menu-btn-open .menu-btn_burger {
    transform: translateX(-50px);
    background: transparent;
  }
  .menu-btn_burger {
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {
      width: 40px;
      height: 4px;
    }
  }
  .menu-btn_burger::before,
  .menu-btn_burger::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 768px) {
      width: 40px;
      height: 4px;
    }
  }
  .menu-btn_burger::before {
    transform: translateY(-16px);
  }
  .menu-btn_burger::after {
    transform: translateY(16px);
  }
  .menu-btn-open .menu-btn_burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn-open .menu-btn_burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
`;

export const MobileNavBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  width: 60%;
  top: 0;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: white;
    text-align: center;
    padding: 10px 0px;
  }
`;
