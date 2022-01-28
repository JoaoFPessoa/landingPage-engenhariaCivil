import styled from 'styled-components'

export const Logo = styled.img`
    position:fixed;
    bottom:0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 10px;
    width:100%;
    z-index:100;
    width: 70px;
    height: 70px;
    @media(max-width: 600px){
        margin-bottom: 20px;
    }
`