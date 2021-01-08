import React from 'react';
import styled from 'styled-components';

const Head = styled.h1`
`;

const SubHead = styled.h4`
  // color: var(--text-light-color);
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
        Urbana-Champaign, working as an AI Research Intern at the{' '}
        <a href="https://irisklabuiuc.wixsite.com/actsi/associates">
          Illinois Risk Lab
        </a>{' '}
        where I facilitate the end-to-end data pipeline for the AI-Powered
        Lifecycle Financial Planning research group.
      </p>
      <br />
    </>
  );
}
