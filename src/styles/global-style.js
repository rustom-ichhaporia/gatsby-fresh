import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --cream: #f0f0f0;
    --red: #f04646;
    --light-red: #f25050;
    --dark-red: #c72424;
    --peach: #ffa984;
    --peach-2: #ff8e5e;
    --dark-peach: #b86440;
    --blue: #4287f5;
    --grey-4: #cccccc;
    --grey-3: #888888;
    --grey-2: #444444;
    --grey-1: #151515;
    --black: #000000;

    --background-color: var(--grey-1);
    --background-light-color: var(--grey-2);
    --text-color: var(--grey-4);
    --text-light-color: var(--white);
    --accent-1-color: var(--peach-2);
    --accent-1-light-color: var(--peach-2);
    --accent-1-dark-color: var(--dark-peach);
    --sans-font: Montserrat, sans-serif;
    --mono-font: IBM Plex Sans, monospace;
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
    font-family: var(--mono-font), Open-Sans, sans-serif;
    color: var(--text-color);
    font-size: 18px;
    line-height: 1.5em;

    * {
      font-weight: 300;
    }

    // overflow: hidden;
    overflow-y: scroll;

    // Hide scrollbar in multiple browsers
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
        // color: var(--text-light-color);
        color: var(--accent-1-color);
      }
      :visited {
        // color: var(--text-light-color);
        color: var(--accent-1-color);
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
