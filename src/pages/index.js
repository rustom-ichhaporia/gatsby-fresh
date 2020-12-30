import React, { useEffect } from 'react';
import styled from 'styled-components';

import { siteMetadata } from '../../gatsby-config';
import GlobalStyle from '@styles/global-style';
import Icon from '@components/icons';

const PageStyle = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;

  * {
    font-weight: 200;
  }

  font-size: 30px;

  p {
    // font-family: IBM Plex Mono;
    font-size: 25px;
  }
`;

const SubHead = styled.h4`
  color: var(--medium-grey);
  font-style: italic;
  span {
    font-family: IBM Plex Mono;
    color: var(--peach);
    font-style: normal;
    font-weight: 600;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
`;

export default function Page() {
  useEffect(() => {
    document.addEventListener('mousemove', function (event) {
      const x = event.pageX - 10;
      const y = event.pageY - 10;
      const cursor = document.querySelector('#cursor');
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <div id="cursor"></div>

      <PageStyle>
        <h1>Hello!</h1>

        <SubHead>
          <blockquote>
            My name is<span> rustom ichhaporia</span>.
            <br />
            This is my Home on the Web.
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
            siteMetadata.socialMedia.map(({ url, name }, i) => (
              <a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                className="buttons"
              >
                <Icon name={name} />
              </a>
            ))}
        </Links>
      </PageStyle>
    </>
  );
}
