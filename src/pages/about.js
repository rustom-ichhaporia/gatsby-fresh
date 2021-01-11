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

  transform: translate(20%, 20%);

  p {
    font-family: var(--mono-font);
    font-size: 25px;
  }
`;

export default function Page() {
  return (
    <div>
      <GlobalStyle />
      <PageStyle>
        <About />

        <SocialLinks />
        
      </PageStyle>
      <Cursor />

    </div>
  );
}
