import { Container } from '../AboutUs/style'
import './style'
import { Card, CardsContainer, Copyright, Text } from './style'
import cartaoFernando from '../../assets/images/cartao-fernando.png'
import cartaoGabriel from '../../assets/images/cartao-gabriel.png'

export default function Footer(){
    return (
    <Container>
        <CardsContainer>
            <Card src={cartaoFernando} alt="firstCard"  />
            <Text>
            " Obra do seu jeito, com a qualidade que você merece. "
            </Text>
            <Card src={cartaoGabriel} alt="secondCard"  />
        </CardsContainer>
        <Copyright>
        Copyright © 2022 Paktor Engenharia e Construções -
        Todos os direitos reservados
        </Copyright>
    </Container>
    )
}