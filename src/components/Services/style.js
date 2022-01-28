import styled from 'styled-components'

export const Container = styled.div `
margin-top: 7rem;
`
export const Title = styled.h1`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 3.5rem;
color: white;

@media(max-width: 600px){
    font-size: 1rem;
}
`
export const TextsContainer = styled.div`
margin: 30px;
display: flex;
justify-content: center;
@media(max-width: 600px){
    flex-direction: column;
}
`
export const Texts = styled.p`
width: 250px;
color: #B8B8B8;
margin: 40px;
@media(max-width: 600px){
    font-size: 0.8rem;
    text-align: center;
}
`