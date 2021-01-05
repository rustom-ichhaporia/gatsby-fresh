import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import About from '@components/about';
import SocialLinks from '@components/social-links';
import Cursor from '@components/cursor';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  font-size: 30px;
  line-height: 1.3em;

  * {
    font-weight: 200;
  }

  p {
    font-family: var(--mono-font);
    font-size: 25px;
  }
`;

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <PageStyle>
        <About />

        <SocialLinks />
        
        <Cursor />
      </PageStyle>
    </>
  );
}
