import { createGlobalStyle } from "styled-components"

export const colors = {
  primary: "#4176B0",
  secondary: "#3B61A6",
  darkColorOne: "#224160",
  darkColorTwo: "#112030",
}

export const GlobalStyle = createGlobalStyle`
body {
  background: ${colors.darkColorTwo};
  color: #fff;
}
`