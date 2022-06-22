import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
}

body {
    width: 100vw;
    height: 100vw;
    background-image: url('../../assets/images/page-background.jpeg');
    background: #202020;
    background-size: cover; height: 100vh;
}
`;
