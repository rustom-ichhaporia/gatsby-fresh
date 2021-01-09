import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import {Cursor, Home, SocialLinks} from '@components/index';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  font-size: 30px;
  line-height: 1.3em;

  text-align: center;
`;



export default function Page() {
  return (
    <div>
      <GlobalStyle />

      <PageStyle>
        <Home />

        <SocialLinks />

        <Cursor />
      </PageStyle>
    </div>
  );
}
