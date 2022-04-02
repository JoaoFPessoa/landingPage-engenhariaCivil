import {
  Article,
  ArticleText,
  ArticleTitle,
  Container,
  Img,
  Subtitle,
  TextContainer,
  Title,
} from "./style";
import engenheiro from "../../assets/images/logo-cFundo.jpeg";
import aspas from "../../assets/images/aspas-branca.png";

export default function AboutUs() {
  return (
    <Container id="quem-somos">
      <Title>
        Bem-vindo à <p>Paktor</p>
      </Title>
      <Subtitle>
        "A obra do seu jeito, com a qualidade que você merece."
      </Subtitle>
      <Article>
        <Img src={engenheiro} alt="engineer" />
        <TextContainer>
          <ArticleTitle>Quem somos nós</ArticleTitle>
          <ArticleText>
            &nbsp;&nbsp;&nbsp;&nbsp; A Paktor foi fundada no bairro de Aldeia da
            Serra, pelos engenheiros e sócios Fernando Padilha e Gabriel Modena.
            Localizada, atualmente, no bairro Bethaville em Barueri.
            <p /> &nbsp;&nbsp;&nbsp;&nbsp; Atua na área de engenharia civil, com
            profissionais habilitados em todos os quesitos de construções.
            Oferecem desde os projetos de arquitetura e engenharia,
            gerenciamento de funcionários, até gestão financeira e dos serviços
            executados na obra. <p />
            &nbsp;&nbsp;&nbsp;&nbsp;Executam reformas em casas, apartamentos,
            salas comercial, como também constroem empreendimentos desde a
            fundação até o acabamento final. Possuem forte viés sustentável -
            energia solar e água de reúso-, como principal diferencial em seus
            projetos, agregam valores da vivência em todas as etapas da obra,
            com conhecimento técnico necessário para elaboração dos mesmos, para
            oferecer ao cliente a melhor experiência possível,{" "}
            <b> sem dor de cabeça </b>.
          </ArticleText>
        </TextContainer>
      </Article>
    </Container>
  );
}
