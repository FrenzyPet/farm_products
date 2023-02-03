import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
    min-height: 100%;
    position: relative;
    font-family: ${ props => props.theme.fontFamily };
    font-size: ${ props => props.theme.fontSizeDefault };
    line-height: ${ props => props.theme.lineHeightDefault };
    font-weight: 400;
    color: ${ props => props.theme.colorBlackText };
  }
`
export default GlobalStyle;