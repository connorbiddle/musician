import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 200vh; //temp!
    font-family: 'Work Sans', sans-serif;
    color: #fff;
  }

  button, input {
    font-family: inherit;
  }

  .site-wrapper {
    position: relative;
    z-index: 1;
  }
`;

export default GlobalStyles;
