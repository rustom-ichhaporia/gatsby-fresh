import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Cursor, Experience, NavBar, SocialLinks } from '@components';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  line-height: 1.3em;
`;

export default function Page() {
  return (
    <div>
      <GlobalStyle />

      <PageStyle>
        <NavBar />
        <Experience />
        <SocialLinks />
      </PageStyle>

      <Cursor />
    </div>
  );
}
