import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --cream: #f0f0f0;
    --red: #f04646;
    --dark-red: #c72424;
    --peach: #ffa984;
    --dark-peach: #b86440;
    --grey-4: #cccccc;
    --grey-3: #888888;
    --grey-2: #444444;
    --grey-1: #151515;
    --black: #000000;

    --background-color: var(--grey-1);
    --background-light-color: var(--grey-2);
    --text-color: var(--grey-3);
    --text-light-color: var(--cream);
    --accent-1-color: var(--red);
    --accent-1-dark-color: var(--dark-red);
    --sans-font: Montserrat, sans-serif;
    --mono-font: IBM Plex Mono, monospace;
  }

  html {
    cursor: none;
    a:link {
      cursor: none;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--background-color);
    font-family: var(--sans-font), var(--mono-font), Open-Sans, sans-serif;
    color: var(--text-color);
    font-size: 20px;

    * {
      font-weight: 200;
    }

    // overflow: hidden;
    overflow-y: scroll;

    // Hide scrollbar
    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    *::selection {
      color: var(--background-color);
      background-color: #f04646ee;
    }

    a {
      text-decoration: none;
      :link {
        color: var(--text-light-color);
      }
      :visited {
        color: var(--text-light-color);
      }
      :hover {
        color: var(--background-color);
      }
      :active {
        color: var(--background-color);
      }
    }
  }
}
`;

export default GlobalStyle;
