import { createGlobalStyle } from "styled-components"

interface GlobalStylesFnProps {
  bgImage: string
}

interface Props {
  bgImage: string
}

export const GlobalStyles = createGlobalStyle<Props>`
  *,
  *:before,
  *:after {
      box-sizing: inherit;
    }
  html {

    box-sizing: border-box;
    font-size: ${props => props.theme.appSize}; /**16px */
  }

  body {
    background-color: ${props => props.theme.colors.elements.bg};

    background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : "")};
    font-weight: 400;
    line-height: 1.65;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.elements.paragraph};
  }
  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.elements.buttonText};
      font-size: ${({ theme }) => theme.size.a};
      text-transform: capitalize;
    }
    ul{
      padding:0;
      margin: 0;
    }
  ul,li{
    list-style: none;
  }

  button {
      font-weight: 300;
     }

  h1, h2, h3, h4, h5
  {
    margin: 2.75rem 0 1.05rem;
    font-weight: 400;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.elements.paragraph};
  }
  h1{
    font-size: ${({ theme }) => theme.size.h1};
  }
  h2{
    font-size: ${({ theme }) => theme.size.h2};
  }
  h3{
    font-size: ${({ theme }) => theme.size.h3};
  }
  h4{
    font-size: ${({ theme }) => theme.size.h4};
  }
  h5{
    font-size: ${({ theme }) => theme.size.h5};
  }
  small {
      font-size: 0.8em;
      }
  p{
    color: ${({ theme }) => theme.colors.elements.paragraph} !important;
    font-size: ${({ theme }) => theme.size.p};
  }
`
