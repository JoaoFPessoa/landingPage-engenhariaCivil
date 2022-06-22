import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 3px solid #00e174;
`;

export const MapContainer = styled.div`
  margin-top: 0.5rem;
  iframe {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 240px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const Card = styled.div`
display: flex;
flex-direction: column;
color: white;
height: 200px;
justify-content: center;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  @media (max-width: 600px) {
    margin: 0;
    justify-content: center;
  }
`;
