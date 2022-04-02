import "./style";
import {
  Container,
  FirstArticle,
  Img,
  LastArticle,
  SecondArticle,
} from "./style";
import diamondIcon from "../../assets/images/diamong-icon.svg";
import worldIcon from "../../assets/images/world-icon.svg";
import eyeIcon from "../../assets/images/eye-icon.svg";

export default function Mission() {
  return (
    <Container>
      <FirstArticle>
        <Img src={worldIcon} />
        <h1>Missão</h1>
        <p>
          Trabalhar utilizando técnicas específicas para cada tipo de obra,
          adequando as soluções para a necessidade de cada cliente, com o
          objetivo de construir relações transparentes, prestando serviços de
          qualidade e garantindo a satisfação do parceiro.
        </p>
      </FirstArticle>
      <FirstArticle>
        <Img src={eyeIcon} />
        <h1>Visão</h1>
        <p>
          Ser referência no mercado da construção civil, utilizando técnicas
          inovadoras de forma sustentável, minimizando custos e desperdícios.
        </p>
      </FirstArticle>
      <LastArticle>
        <Img src={diamondIcon} />
        <h1>Valores</h1>
        <ol>
          <li>• Integridade</li>
          <li>• Ética e transparencia </li>
          <li>• Comprometimento e Responsabilidade</li>
          <li>• Atitude e liderança </li>
          <li>• Qualidade e Segurança </li>
          <li>• Sustentabilidade</li>
          <li>• Meritocracia </li>
          <li>• Desenvolvimento e Inovação</li>
        </ol>
      </LastArticle>
    </Container>
  );
}
