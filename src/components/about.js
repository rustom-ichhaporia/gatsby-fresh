import React from 'react';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';

const Head = styled.h1`
  font-size: 30px;
  line-height: 3em;
  span {
    text-align: center;
  }
`;

const IntroSection = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

export default function About() {
  return (
    <>
      <IntroSection>
        <Head>
          Hi there, I'm Rustom Ichhaporia!
          <br />
          I play with numbers and music.
          <br />
          Welcome to my Home on the Web!
        </Head>
        <StaticImage
          src="../images/rustom_square.jpg"
          alt="Picture of Rustom"
          style={{
            borderRadius: '20px',
            maxWidth: '300px',
            maxHeight: '300px',
            float: 'right',
          }}
        />
      </IntroSection>

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
        Urbana-Champaign, working as a Machine Learning Intern at{' '}
        <a
          href="https://twitter.com/"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        {', '}
        and serving as a Course Assistant and Code Review Moderator for the
        course Software Design Studio (
        <a
          href="https://courses.grainger.illinois.edu/CS126/sp2021/"
          aria-label="CS 126: Software Design Studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          CS 126
        </a>
        ).
      </p>
      <br />
    </>
  );
}
