import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '@styles/global-style';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;

  font-size: 30px;
`;

const Head = styled.h1`
  color: var(--light-grey);
`;

const SubHead = styled.p`
  color: var(--medium-grey);
  font-style: italic;
  mark {
    background-color: var(--peach);
    font-style: normal;
    font-weight: 900;
  }
`;

export default function Page() {
  useEffect(() => {
    document.addEventListener('mousemove', function (event) {
      const x = event.pageX - 10;
      const y = event.pageY - 10;
      const cursor = document.querySelector('#cursor');
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <div id="cursor"></div>

      <PageStyle>
        <Head>Hello!</Head>
        <SubHead>
          <blockquote>
            Welcome to <mark>Rustom Ichhaporia</mark>'s Home on the Web.
          </blockquote>
        </SubHead>
        <h1>Hello!</h1>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <p>Hello</p>
      </PageStyle>
    </>
  );
}
