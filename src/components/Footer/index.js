import "./style";
import {
  Container,
  Card,
  CardsContainer,
  Copyright,
  Logo,
  MapContainer,
  Row,
  Text,
} from "./style";
import logo from "../../assets/images/logo-footer2.png";
import whatsapp from "../../assets/images/whatsapp3.svg";
import instagram from "../../assets/images/instagram.svg";
import pin from "../../assets/images/pin.svg";
import mail from "../../assets/images/mail.svg";

export default function Footer() {
  return (
    <Container>
      <CardsContainer id="contato">
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7220826659786!2d-46.870494785641995!3d-23.50651776545298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03d22ffb1e47%3A0x872f33af5d4784aa!2sAv.%20Trindade%2C%20254%20-%20Bethaville%20I%2C%20Barueri%20-%20SP%2C%2006404-326!5e0!3m2!1spt-BR!2sbr!4v1648924226191!5m2!1spt-BR!2sbr"
            width="500"
            height="200"
            loading="lazy"
            title="bethaville"
            allowfullscreen
          ></iframe>
        </MapContainer>

        <Logo src={logo} alt="logo" />
        <Card class="Info">
          <Row>
            <img src={whatsapp} alt="whatsapp" />
            <h1>(11)99900-1074</h1>
          </Row>
          <Row>
            <img src={whatsapp} alt="whatsapp" />
            <h1>(11)99973-5135</h1>
          </Row>
          <Row>
            <img src={mail} alt="mail" />
            <h1>paktor.engenharia@gmail.com</h1>
          </Row>
          <Row>
            <img src={instagram} alt="insta" />
            <h1>@paktor.engenharia</h1>
          </Row>
          <Row>
            <img src={pin} alt="pin" />
            <h1>Av. Trindade 254, sala 1113 Bethaville I, Barueri, SP</h1>
          </Row>
        </Card>
      </CardsContainer>
      <Copyright>
        Copyright © 2022 Paktor Engenharia e Construções - Todos os direitos
        reservados
      </Copyright>
    </Container>
  );
}
