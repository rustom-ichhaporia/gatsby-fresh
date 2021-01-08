import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Cursor, Experience, SocialLinks } from '@components';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  font-size: 30px;
  line-height: 1.3em;
`;

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Experience />
      <SocialLinks />
      <Cursor />
    </>
  );
}
