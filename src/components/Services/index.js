import "./style";
import {
  Container,
  ImagesFlexContainer,
  Img,
  ImgContainer,
  Texts,
  TextsContainer,
  Title,
} from "./style";
import reforma from "../../assets/images/reforma-services.jpeg";
import construcao from "../../assets/images/contrucao-services.jpeg";
import projeto from "../../assets/images/projeto-services.jpeg";

export default function Services() {
  return (
    <Container id="servicos">
      <Title>Conheça nossos serviços</Title>
      <ImagesFlexContainer>
        <ImgContainer>
          <Img src={reforma} />
          <Texts>Reforma</Texts>
        </ImgContainer>
        <ImgContainer>
          <Img src={construcao} />
          <Texts>Construção</Texts>
        </ImgContainer>
        <ImgContainer>
          <Img src={projeto} />
          <Texts>Projeto</Texts>
        </ImgContainer>
      </ImagesFlexContainer>
    </Container>
  );
}
