import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '@styles/global-style';
import { Layout, Projects } from '@components';


export default function Page() {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Projects />
      </Layout>
    </>
  );
}
