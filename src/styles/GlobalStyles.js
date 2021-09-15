import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/index";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
    background: ${COLORS.background};
  } 
  body {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    color: ${COLORS.transparentText};
  }
  p,
  a {
  font-size: 18px;
  }
  h2 {
    font-size: 45px;
    line-height: 60px;
    background: ${COLORS.gradientText};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  h3 {
    font-size: 23px;
    line-height: 30px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  h1 {
    line-height: 60px;
    padding: 10px;
    font-size: 60px;
    background:${COLORS.gradientText};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

`;

export default GlobalStyles;
