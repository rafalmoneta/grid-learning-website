import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-sizing: border-box;
    *, *:before, *:after {
      box-sizing: inherit;
    }

    font-size: 1.125rem;
    background-color: #000;
    color: #FFF;
    font-family: 'Poppins', sans-serif;

  }
`;

export default GlobalStyles;
