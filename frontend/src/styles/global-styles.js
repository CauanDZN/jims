import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 480px) {
      font-size: 81.25%; // 13px
    }

    body {
      font-family: ${({ theme }) => theme.fonts.font1};
      font-size: 1rem;
    }
  }
`