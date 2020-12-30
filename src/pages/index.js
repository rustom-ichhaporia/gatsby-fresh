import React, { useEffect } from 'react';
import styled from 'styled-components';
import Obfuscate from 'react-obfuscate';

import { siteMetadata } from '../../gatsby-config';
import GlobalStyle from '@styles/global-style';
import Icon from '@components/icons';

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
    // font-family: IBM Plex Mono;
    font-size: 25px;
  }
  #link-highlight {
    background: #ffa984;
    border-radius: 999px;
    mix-blend-mode: difference;
    position: absolute;
    pointer-events: none;
    transition: 0.15s ease;
    height: 30px;
    width: 30px;
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
  // New cursor: https://codepen.io/markmead/pen/aXjerK
  useEffect(() => {
    const PAGE_LINKS = document.querySelectorAll('a');
    const HIGHLIGHT = document.getElementById('link-highlight');
    let isOnElement = false;

    // move highlighter
    const moveHighlighter = (e) => {
      if (isOnElement) return false;
      HIGHLIGHT.style.left = `${e.pageX - 10}px`;
      HIGHLIGHT.style.top = `${e.pageY - 10}px`;
    };
    document.addEventListener('mousemove', moveHighlighter);

    // apply styling over target
    const highlightLink = (ele) => {
      HIGHLIGHT.style.left = `${ele.offsetLeft - 12}px`;
      HIGHLIGHT.style.top = `${ele.offsetTop - 6}px`;
      HIGHLIGHT.style.width = `${ele.offsetWidth + 24}px`;
      HIGHLIGHT.style.height = `${ele.offsetHeight + 12}px`;
      isOnElement = true;
    };
    PAGE_LINKS.forEach((link) =>
      link.addEventListener('mouseenter', highlightLink.bind(null, link, false))
    );

    // default styling off target
    const unHighlightLink = () => {
      HIGHLIGHT.style.width = '20px';
      HIGHLIGHT.style.height = '20px';
      isOnElement = false;
    };
    PAGE_LINKS.forEach((link) =>
      link.addEventListener('mouseleave', unHighlightLink)
    );
  }, []);

  return (
    <>
      <GlobalStyle />

      <PageStyle>
        <h1>Hello!</h1>

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
        <div id="link-highlight"></div>
      </PageStyle>
    </>
  );
}
