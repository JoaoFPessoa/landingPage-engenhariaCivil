import styled from 'styled-components'

export const Container = styled.div `
margin-top: 4rem;
display: flex;
justify-content: center;
@media(max-width: 600px){
    flex-direction: column
}
`
export const FirstArticle = styled.div`
display: flex;
flex-direction: column;
width: 350px;
margin-right: 10rem;
text-align: center;
color: #B8B8B8;
h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: white;
}
@media(max-width: 600px){
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
        width: 300px;
    }
}
`
export const SecondArticle = styled.div`
display: flex;
flex-direction: column;
width: 350px;
text-align: center;
color: #B8B8B8;
h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: white;
    margin-top: 2rem;
}
@media(max-width: 600px){
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 1rem;
    }
    p {
        font-size: 0.8rem;
        width: 300px;
    }
}
`
