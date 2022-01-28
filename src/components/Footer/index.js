import { Container } from '../AboutUs/style'
import './style'
import { Card, CardsContainer, Copyright, Logo, Row, Text } from './style'
import logo from '../../assets/images/logo-simbolo.png'
import whatsapp from '../../assets/images/whatsapp3.svg'
import instagram from '../../assets/images/instagram.svg'
import pin from '../../assets/images/pin.svg'
import mail from '../../assets/images/mail.svg'

export default function Footer(){
    return (
    <Container>
        <CardsContainer id="contato">
            <Text>
            Obra do seu jeito, com a qualidade que você merece.
            </Text>
            <Logo src={logo} alt="logo" />
            <Card class="Info">
            <Row>
            <img src={whatsapp} alt="whatsapp"/>
             <h1>   
                (11)99900-1074
            </h1>
            </Row>
            <Row>
            <img src={whatsapp} alt="whatsapp"/>
            <h1>
                (11)99973-5135
            </h1>
            </Row>
            <Row>
            <img src={mail} alt="mail"/>
            <h1>
                 paktor.engenharia@gmail.com
            </h1>
            </Row>
            <Row>
            <img src={instagram} alt="insta"/>
            <h1>
            @paktor.engenharia
            </h1>
            </Row>
            <Row>
            <img src={pin} alt="pin"/>
            <h1>
            Av. Trindade 254, sala 1113 Bethaville I, Barueri, SP
            </h1>
            </Row>
        </Card>
        </CardsContainer>
        <Copyright>
        Copyright © 2022 Paktor Engenharia e Construções -
        Todos os direitos reservados
        </Copyright>
    </Container>
    )
}