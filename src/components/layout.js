import React from 'react';
import styled from 'styled-components';
import { Cursor, NavBar, SocialLinks } from '@components';

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  line-height: 1.3em;


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Cursor />

      <NavBar />
      {children}
      <SocialLinks />
    </Wrapper>
  );
}
