import  { Article, ArticleText, ArticleTitle, Container, Img, Subtitle, TextContainer, Title } from './style'
import engenheiro from '../../assets/images/engenheiro3.png'
import aspas from '../../assets/images/aspas-branca.png'

export default function AboutUs(){
    return (
    <Container id="quem-somos">
        <Title>Bem-vindo à Paktor</Title>
        <Subtitle>Obra do seu jeito, com a qualidade que você merece.
        </Subtitle>
        <Article>
            <Img src={engenheiro} alt="engineer" />
            <TextContainer>
                <ArticleTitle>Quem somos nós</ArticleTitle>
                <ArticleText>
                A Paktor foi fundada no bairro de Aldeia da Serra, Barueri/SP, 
                pelos engenheiros e sócios Fernando Padilha e Gabriel Modena. 
                Localizada atualmente no bairro Bethaville em Barueri.
                Atua na área da construção civil, com profissionais habilitados em todos os quesitos
                de construções e projetos. Elabora projetos de arquitetura e engenharia assim como 
                os executa, sendo o principal diferencial nos seus projetos, pois agregam os valores 
                da vivência e experiência de todas as etapas da obra ao conhecimento técnico necessário 
                para elaboração dos mesmos.
                  </ArticleText>
            </TextContainer>
        </Article>
    </Container>
    )
}