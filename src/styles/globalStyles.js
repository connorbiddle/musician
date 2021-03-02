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
    background: #111;
  }

  button, input {
    font-family: inherit;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: -4px;
  }

  .site-wrapper {
    position: relative;
    z-index: 1;
  }
`;

export default GlobalStyles;
