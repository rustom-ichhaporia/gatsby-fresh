import React from 'react';
import styled from 'styled-components';

const Head = styled.p``;

const SubHead = styled.p`
  font-style: italic;
  span {
    font-family: var(--mono-font);
    color: var(--accent-1-color);
    font-style: normal;
    font-weight: 600;
  }
`;

export default function About() {
  return (
    <>
      <Head>Hello!</Head>

      <SubHead>
        <blockquote>
          My name is<span> rustom ichhaporia</span>.
          <br />
          Welcome to my Home on the Web.
        </blockquote>
      </SubHead>

      <p>
        I'm a CS + statistics student at the University of Illinois,
        Urbana-Champaign.
      </p>

      <p>
        I work at the intersection of data science and, well, everything. I
        believe leveraging the power of data of all sizes can have an impact on
        any field, so I try my best to explore all the ways it can be used.
      </p>

      <p>
        I'm currently studying at the University of Illinois at
        Urbana-Champaign, working as a Data Science Intern at{' '}
        <a
          href="https://researchpark.illinois.edu/tenant_directory/motorola-solutions/"
          aria-label="Link to Motorola Solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Motorola Solutions
        </a>{', '}
        and serving as a Course Assistant and Code Review Moderator for the course{' '}
        <a
          href="https://courses.grainger.illinois.edu/CS126/sp2021/"
          aria-label="Link to CS 126: Software Design Studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          CS 126: Software Design Studio
        </a>
        .
      </p>
      <br />
    </>
  );
}
