import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Projects, SocialLinks, Cursor } from '@components/index';

const PageStyle = styled.div`
  max-width: 900px;//1400px;
  margin: auto;
  padding: 20px;
`;

export default function Page() {
  return (
    <div>
      <GlobalStyle />

      <PageStyle>
        <Projects />
        <SocialLinks />
      </PageStyle>

      <Cursor />
    </div>
  );
}
