import React, { useEffect } from 'react';
import styled from 'styled-components';
import Obfuscate from 'react-obfuscate';

import { siteMetadata } from '../../gatsby-config';
import GlobalStyle from '@styles/global-style';
import Icon from '@components/icons';
import Cursor from '@components/cursor.js'

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  font-size: 30px;
  line-height: 1.3em;

  * {
    font-weight: 200;
  }

  p {
    font-family: IBM Plex Mono;
    font-size: 25px;
  }
`;

const Head = styled.h1`
  font-family: IBM Plex Mono;
`;

const SubHead = styled.h4`
  // color: var(--text-light-color);
  font-style: italic;
  span {
    font-family: IBM Plex Mono;
    color: var(--accent-1-color);
    font-style: normal;
    font-weight: 600;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
  // a:link, a:visited {
  //   color: var(--grey-4);
  // }
`;

export default function Page() {
  return (
    <>
      <GlobalStyle />

      <PageStyle>
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
          believe leveraging the power of data of all sizes can have an impact
          on any field, so I try my best to explore all the ways it can be used.
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

        <Links>
          {siteMetadata.socialMedia &&
            siteMetadata.socialMedia.map(({ url, name }) => (
              <a
                href={
                  name == 'Email'
                    ? 'mailto:' + url + '?subject=Tell me something funny'
                    : url
                }
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className="buttons"
              >
                <Icon name={name} />
              </a>
            ))}
        </Links>
        
        <Cursor />
      </PageStyle>
    </>
  );
}
