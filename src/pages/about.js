import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { About, Layout, P5Cursor } from '@components';

const PageStyle = styled.div``;

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <About />
      </Layout>
    </>
  );
}
