import { createGlobalStyle } from "styled-components";

import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts};
    html{scroll-snap-type: y mandatory;}
    body {
        margin: 0;
        background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
        font-family: Lato;
        scroll-snap-type: proximity;
        scroll-snap-points-y: repeat(100vh);
        scroll-snap-type: y proximity;
    }
`;

export default GlobalStyle;
