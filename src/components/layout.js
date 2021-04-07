import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TransitionState, TransitionLink } from 'gatsby-plugin-transition-link';
import { Cursor, NavBar, SocialLinks } from '@components';
import { theme } from '@styles';

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin: auto;
  position: relative;
`;

const ChildrenWrapper = styled.main`
  position: relative;
  height: 100%;
  padding-bottom: 60px;
`;

const Separator = styled.hr`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.backgroundLight};
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

export default function Layout({ children, hideNavBar, hideFooter }) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
