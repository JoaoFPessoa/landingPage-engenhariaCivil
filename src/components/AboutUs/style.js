import styled from 'styled-components'

export const Container = styled.div`
margin-top: 4rem;
`
export const Title = styled.h1`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 3.5rem;
color: white;

@media(max-width: 600px){
    font-size: 2rem;
}
`
export const Subtitle = styled.p`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #B8B8B8;
margin-top: 1rem;
@media(max-width: 600px){
    font-size: 0.8rem;
    max-width: 380px;
}
`
export const Article = styled.article`
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5rem;
    @media(max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const Img = styled.img`
    height: 400px;
    width: 400px;
    @media(max-width: 600px){
        height: 200px;
        width: 200px;
    }
`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
margin-left: 6.5rem;
color: white;
border-left: 1px solid white;
height: 100%;
padding-left: 50px;
@media(max-width: 600px){
    align-items: center;
    margin-left: 0;
    border: none;
}
`
export const ArticleTitle = styled.h1`
font-size: 2.5rem;
@media(max-width: 600px){
    font-size: 1rem;
    margin-top: 2rem;
}
`
export const ArticleText = styled.p`
margin-top: 1.5rem;
@media(max-width: 600px){
    font-size: 0.8rem;
    line-height: 1.3rem;
}
`