import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Cursor, Home, Layout } from '@components';

// const ChildrenWrapper = styled.div`
//   // position: relative;
//   // height: 100%;
//   // padding-bottom: 60px;
//   margin: auto;
// `;

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Bin = styled.div`
  margin: auto;
  max-width: 350px;
`;

export default function Page() {
  return (
    <Outer>
      <GlobalStyle />

      {/* <Layout hideNavBar={true} hideFooter={true}> */}
      {/* <ChildrenWrapper> */}
      <Bin>
        <Home />
      </Bin>
      <Cursor />
      {/* </ChildrenWrapper> */}
      {/* </Layout> */}
    </Outer>
  );
}
