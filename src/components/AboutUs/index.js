import  { Article, ArticleText, ArticleTitle, Container, Img, Subtitle, TextContainer, Title } from './style'
import engenheiro from '../../assets/images/engenheiro3.png'
import aspas from '../../assets/images/aspas-branca.png'

export default function AboutUs(){
    return (
    <Container>
        <Title>Bem-vindo à Paktour</Title>
        <Subtitle>Lema da empresa, lema da empresa random word.
        </Subtitle>
        <Article>
            <Img src={engenheiro} alt="engineer" />
            <TextContainer>
                <ArticleTitle>Quem somos nós</ArticleTitle>
                <ArticleText>
                    Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. Lorem Ipsum is simply dummy text 
                  of the printing and typesetting. 
                  </ArticleText>
            </TextContainer>
        </Article>
    </Container>
    )
}