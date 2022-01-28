import './style'
import { Container, Img, Text } from './style'
import obra from '../../assets/images/obra.jpg'
import aspas from '../../assets/images/aspas-branca.png'

export default function Banner(){
    return(
        <Container>
            <Img src={obra} alt="obra"/>
            <Text>
            <img src={aspas} alt="aspas" />
            Garantimos o menor investimento possível para a realização do seu sonho.
            </Text>
        </Container>
    )
}