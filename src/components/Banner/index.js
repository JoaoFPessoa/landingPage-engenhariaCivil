import "./style";
import { Container, Img, Text } from "./style";
import obra from "../../assets/images/obra.jpg";
import aspas from "../../assets/images/aspas-branca.png";
import logoSimbolo from "../../assets/images/header-img.jpeg";

export default function Banner() {
  return (
    <Container>
      <Img src={logoSimbolo} alt="obra" />
    </Container>
  );
}
