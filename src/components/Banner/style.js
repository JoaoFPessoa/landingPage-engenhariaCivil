import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100%;
`

export const Img = styled.img`
width: 100%;
height: 480px;
`
export const Text = styled.p`
color: white;
position: absolute;
bottom: 8px;
left: 4rem;
max-width: 200px;
text-align: left;
@media(max-width: 768px){
    display: none;
}
img {
    margin-right: 60px;
}
;
`