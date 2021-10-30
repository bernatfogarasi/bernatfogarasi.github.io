import { createGlobalStyle } from "styled-components";
import "animate.css";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${Fonts};
    html{scroll-snap-type: y mandatory;}
    body {
        margin: 0;
        /* background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); */
        /* font-family: Lato; */
        scroll-snap-type: proximity;
        scroll-snap-points-y: repeat(100vh);
        scroll-snap-type: y proximity;
        a {
            text-decoration-thickness: 1px;
            text-underline-offset: 5px;
            color: black;
            :hover{color: grey;}
        }
    }
`;

export default GlobalStyle;
