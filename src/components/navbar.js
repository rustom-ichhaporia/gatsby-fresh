import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.header``;

const Navigation = styled.nav``;

export default function NavBar() {
  const navLinks = [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Experience',
      url: '/jobs',
    },
    {
      name: 'Work',
      url: '/projects',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <Header>
      <Navigation>
        {navLinks &&
          navLinks.map(({ url, name }) => (
            <li>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </Navigation>
    </Header>
  );
}
