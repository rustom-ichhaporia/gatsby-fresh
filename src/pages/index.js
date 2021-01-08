import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import Home from '@components/home';
import SocialLinks from '@components/social-links';
import Cursor from '@components/cursor';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  font-size: 30px;
  line-height: 1.3em;

  text-align: center;

  * {
    font-weight: 200;
  }
`;



export default function Page() {
  return (
    <>
      <GlobalStyle />

      <PageStyle>
        <Home />

        <SocialLinks />

        <Cursor />
      </PageStyle>
    </>
  );
}
