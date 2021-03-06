import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const PageStyle = styled.div`
  font-size: 30px;
  line-height: 1.3em;
`;

export default function Home() {
  return (
    <div>
      <h2>
        <Link to="about">About</Link>
      </h2>
      <h2>
        <Link to="experience">Experience</Link>
      </h2>
      <h2>
        <Link to="projects">Projects</Link>
      </h2>
    </div>
  );
}
