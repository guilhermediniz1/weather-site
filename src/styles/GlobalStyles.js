import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --white: #F8F8F8;
  --black: #000;
  --light-black: #424242;
  --bluish-white: #E4F1FF;
  --light-blue: #B5D8FE;
  --dark-blue: #5D9CE6;
  --night-blue: #256199;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100vh;
  width: 100vw;

  @media (min-width: 1131px){
    overflow: hidden;
  }
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

#root{
  width: 100%;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`;
