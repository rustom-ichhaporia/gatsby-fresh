import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles';
import { theme } from '@styles';
import { Cursor, Home, Layout, Splash } from '@components';

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bin = styled.div`
  margin: auto;
  max-width: 350px;
`;

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outer>
        <Splash />
        <Cursor />
      </Outer>
    </ThemeProvider>
  );
}
