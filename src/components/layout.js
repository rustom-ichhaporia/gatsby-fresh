import React from 'react';
import styled from 'styled-components';
import { TransitionState, TransitionLink } from 'gatsby-plugin-transition-link';
import { Cursor, NavBar, SocialLinks } from '@components';

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Separator = styled.hr`
  margin-top: 20px;
  width: 100%;
  border: 1px solid var(--background-light-color);
  // background-color: var(--red);
  // border: 1px var(--text-color);
`;

export default function Layout({ children, hideNavBar }) {
  return (
    <Wrapper>
      <Cursor />
      {!hideNavBar && (
        <>
          <NavBar /> <Separator />
        </>
      )}
      {children}
      <SocialLinks />
    </Wrapper>
  );
}
