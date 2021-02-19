import React from 'react';
import styled from 'styled-components';
import { TransitionState, TransitionLink } from 'gatsby-plugin-transition-link';
import { Cursor, NavBar, SocialLinks } from '@components';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 700px;
  margin: auto;
  position: relative;
`;

const ChildrenWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 60px;
`;

const Separator = styled.hr`
  // margin-top: 20px;
  width: 100%;
  border: 1px solid var(--background-light-color);
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

export default function Layout({ children, hideNavBar, hideFooter }) {
  return (
    <>
      <Wrapper>
        {!hideNavBar && (
          <>
            <NavBar /> <Separator />
          </>
        )}

        <ChildrenWrapper>{children}</ChildrenWrapper>

        {!hideFooter && (
          <Footer>
            <Separator />

            <SocialLinks />
          </Footer>
        )}
      </Wrapper>
      <Cursor />
    </>
  );
}
