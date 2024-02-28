import { createGlobalStyle } from "styled-components";
import relevance from "../styles/fonts/Relevance-trial-Regular.ttf";
import relevanceBold from "../styles/fonts/Relevance-trial-Bold.ttf";

export const theme = {
  background: "#E6E9ED",
  primary: "#4169E1",
  light: "#e2e2e2",
  text: "#0A2463",
  error: "#FB3640",
  border: "#0A2463",
  button: "#ff3693",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
    padding: 0;
};
@font-face {
  font-family: 'Relevance';
  src: url(${relevance})
}
@font-face {
  font-family: 'Relevance Bold';
  src: url(${relevanceBold})
}
  body {
    box-sizing: border-box;
    font-family: 'Poppins Regular';
    background-color: ${theme.background};
  }

  h1 {
    font-family: 'Poppins Bold';
  }`
;