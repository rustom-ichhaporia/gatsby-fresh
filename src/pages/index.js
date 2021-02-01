import React, { useEffect } from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Home, Layout } from '@components';

export default function Page() {
  return (
    <>
      <GlobalStyle />

      <Layout hideNavBar={true} hideFooter={true}>
        <Home />
      </Layout>
    </>
  );
}
