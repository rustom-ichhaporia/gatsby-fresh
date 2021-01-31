import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Home, Layout } from '@components';

const PageStyle = styled.div`
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  height: 100%;


  display: flex;
  justify-content: space-between;


  font-size: 30px;
  line-height: 1.3em;

  text-align: center;
`;

export default function Page() {
  return (
    <>
      <GlobalStyle />

      <Layout hideNavBar={true}>
        <PageStyle>
          <Home />
        </PageStyle>
      </Layout>
    </>
  );
}
