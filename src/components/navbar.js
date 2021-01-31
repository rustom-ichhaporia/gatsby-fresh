import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.header`
  width: 100%;
  margin-top: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function NavBar() {
  const navLinks = [
    {
      name: 'ABOUT',
      url: '/about',
    },
    {
      name: 'EXPERIENCE',
      url: '/experience',
    },
    {
      name: 'PROJECTS',
      url: '/projects',
    },
  ];

  return (
    <Header>
      <Navigation>
        {navLinks &&
          navLinks.map(({ url, name }) => (
            <Link id="links" to={url}>
              {name}
            </Link>
          ))}
      </Navigation>
    </Header>
  );
}
