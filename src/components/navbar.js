import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { mixins } from '@styles';

const Header = styled.header`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${mixins.whiteLink}
`;

const NavLink = styled.h2`
  margin: 0;
`;

export default function NavBar() {
  const navLinks = [
    {
      name: 'ABOUT',
      url: '/about/',
    },
    {
      name: 'EXPERIENCE',
      url: '/experience/',
    },
    {
      name: 'PROJECTS',
      url: '/projects/',
    },
  ];

  return (
    <Header>
      <Navigation>
        {navLinks &&
          navLinks.map(({ url, name }) => (
            <Link id="links" to={url}>
              <NavLink>{name}</NavLink>
            </Link>
          ))}
      </Navigation>
    </Header>
  );
}
