import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --peach: #ffa984;
    --dark-peach: #b86440;
    --light-grey: #cccccc;
    --medium-grey: #888888;
    --dark-grey: #151515;
    --black: #000000;

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
    background: var(--dark-grey);
    font-family: Montserrat, IBM Plex Mono, Open-Sans, Helvetica, Sans-Serif;
    color: var(--light-grey);

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
