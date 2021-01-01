import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --cream: #f0f0f0;
    --red: #f04646;
    --dark-red: #c72424;
    --peach: #ffa984;
    --dark-peach: #b86440;
    --red: #f04646;
    --grey-4: #cccccc;
    --grey-3: #888888;
    --grey-2: #444444;
    --grey-1: #151515;
    --black: #000000;

    --background-color: var(--grey-1);
    --background-light-color: var(--grey-2);
    --text-color: var(--grey-3);
    --text-light-color: var(--grey-4);
    --accent-1-color: var(--red);
    --accent-1-dark-color: var(--dark-red);
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
    font-family: Montserrat, IBM Plex Mono, Open-Sans, Helvetica, Sans-Serif;
    color: var(--text-color);
    *::selection {
      color: var(--background-color);
      background: var(--accent-1-color);
    }

    a {
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

  // Old cursor: https://codepen.io/g-norman/pen/oqMGyj
  // #cursor {
  //   position: absolute;
  //   width: 20px;
  //   height: 20px;
  //   background: white;
  //   border-radius: 50%;
  //   mix-blend-mode: difference;
  //   pointer-events: none;
  //   transition: transform .15s ease-in-out;
  //   z-index: 100;
  // }
  // useEffect(() => {
  //   document.addEventListener('mousemove', function (event) {
  //     const x = event.pageX - 10;
  //     const y = event.pageY - 10;
  //     const cursor = document.querySelector('#cursor');
  //     cursor.style.left = x + 'px';
  //     cursor.style.top = y + 'px';
  //   });
  // }, []);
}
`;

export default GlobalStyle;
