import styled from 'styled-components'

export const Container = styled.div`
`

export const CardsContainer = styled.div`
display: flex;
background: rgb(84,84,84);
`
export const Text = styled.p`
width: 250px;
font-style: italic;
color: white;
line-height: 2rem;
margin-top: 20px;
margin-left: 20px;
@media(max-width: 600px){
    display: none;
}
`

export const Logo = styled.img`
width: 350px;
height: 130px;
margin-left: 30%;
@media(max-width: 600px){
 display: none;   
}

`
export const Card = styled.div`
display: flex;
flex-direction: column;
color: white;
width: 350px;
height: 200px;
margin-top: 20px;
justify-content: center;
width: 100%;
@media(max-width: 600px){
 width: 100%;   
}
}
h1 {
font-size: 0.8rem;
margin-bottom: 10px;
width: 220px;
}
img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
}
`

export const Copyright = styled.div`
color: #B8B8B8;
font-size: 0.8rem;
@media(max-width: 600px){
 display: none;   
}
`
export const Row = styled.div`
display: flex;
margin-left: auto;
margin-right: 20px;
@media(max-width: 600px){
 margin: 0;
 justify-content: center;   
}
`