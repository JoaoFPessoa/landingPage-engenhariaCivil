import { Container, Img, NavBarContainer } from "./style";
import logo from "../../assets/images/logo-verde-branco.png";

export default function Header() {
  return (
    <Container>
      <a href="/" class="bigger-logo">
        {" "}
        <Img src={logo} alt="logoPaktor" />{" "}
      </a>
      <NavBarContainer>
        <a href="#quem-somos" class="navbar-item">
          Quem somos
        </a>
        <a href="#servicos" class="navbar-item">
          Serviços
        </a>
        <a href="#contato" class="navbar-item">
          Contato
        </a>
      </NavBarContainer>
    </Container>
  );
}
