import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

const PageStyle = styled.div`
// position: absolute;
// vertical-align: middle;
  font-size: 30px;
  line-height: 1.3em;
  margin: auto;
`;

const SectionLink = styled.h1`
`;

export default function Home() {
  return (
    <PageStyle>
      <SectionLink>
        <Link to="about">ABOUT</Link>
      </SectionLink>
      <SectionLink>
        <Link to="experience">EXPERIENCE</Link>
      </SectionLink>
      <SectionLink>
        <Link to="projects">PROJECTS</Link>
      </SectionLink>
    </PageStyle>
  );
}
