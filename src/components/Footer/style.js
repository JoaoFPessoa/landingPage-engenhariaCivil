import styled from "styled-components";

export const Container = styled.div``;

export const CardsContainer = styled.div`
  display: flex;
  border-top: 3px solid #00e174;
`;
export const Text = styled.p`
  width: 250px;
  font-style: italic;
  color: white;
  line-height: 2rem;
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const MapContainer = styled.div`
  width: 800px;
  margin-top: 0.5rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 500px;
  height: 130px;
  margin-left: 10%;
  margin-top: 1rem;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Card = styled.div`
display: flex;
flex-direction: column;
color: white;
margin-right: 3rem;
height: 200px;
margin-top: 20px;
justify-content: center;
width: 100%;
@media(max-width: 600px){
 width: 100%;  
 align-items: center; 
}
}
h1 {
font-size: 0.9rem;
margin-bottom: 10px;
width: 240px;
}
img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
`;

export const Copyright = styled.div`
  color: #b8b8b8;
  font-size: 0.8rem;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  @media (max-width: 600px) {
    margin: 0;
    justify-content: center;
  }
`;
