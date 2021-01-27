import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Cursor, Home, SocialLinks } from '@components/index';

const PageStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
      </PageStyle>

      <Cursor />
    </div>
  );
}
