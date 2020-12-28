import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #cccccc;
    --peach: #ffa984;
    --dark-peach: #b86440;
    --dark-grey: #151515;
    --black: #000000;
  }

  html {
    cursor: none;
    a:link {
      cursor: none;
    }
    // https://codepen.io/g-norman/pen/oqMGyj
    // cursor: url("data:image/svg+xml,%3Csvg height='6' width='6' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' fill='black' r='4'/%3E%3C/svg%3E") 3 3, auto;
    // a:link {
    //   cursor: url("data:image/svg+xml,%3Csvg height='6' width='6' viewBox='0 0 8 8' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' fill='black' r='4'/%3E%3C/svg%3E") 3 3, auto;
    // }
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--dark-grey);
    font-family: Montserrat, IBM Plex Mono, Open-Sans, Helvetica, Sans-Serif;
    color: var(--white);

    a {
      :link {
        color: var(--white);
      }
      :visited {
        color: var(--white);
      }
      :hover {
        color: var(--peach);
      }
      :active {
        color: var(--dark-peach);
      }
    }
  }

  #cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;
    transition: transform .15s ease-in-out;
    z-index: 100;
  }
  
  // // https://codepen.io/hbthen3rd/pen/ywxjWx
`;

export default GlobalStyle;
