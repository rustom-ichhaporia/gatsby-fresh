import React, { useEffect } from 'react';
import styled from 'styled-components';

// Based on: https://codepen.io/markmead/pen/aXjerK
// Old cursor: https://codepen.io/g-norman/pen/oqMGyj

const CursorStyle = styled.div`
  #outer-ring {
    border: 2px solid var(--accent-1-color);
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: left 0.1s, top 0.1s, width 0.3s, height 0.3s, border-radius 0.5s;
    height: 40px;
    width: 40px;
    // mix-blend-mode: difference;
  }

  #inner-dot {
    position: absolute;
    background: var(--white);
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 100%;
    width: 6px;
    height: 6px;
    // mix-blend-mode: difference;
  }
`;

export default function Cursor() {
  useEffect(() => {
    const pageLinks = document.querySelectorAll('a');
    const outerRing = document.getElementById('outer-ring');
    const innerDot = document.getElementById('inner-dot');
    let isOnElement = false;

    const moveHighlighter = (e) => {
      innerDot.style.left = `${e.pageX}px`;
      innerDot.style.top = `${e.pageY}px`;
      if (isOnElement) return false;
      outerRing.style.left = `${e.pageX}px`;
      outerRing.style.top = `${e.pageY}px`;
    };
    document.addEventListener('mousemove', moveHighlighter);

    const mouseDownHighlighter = (e) => {

      if (isOnElement) {
        outerRing.style.width = `${outerRing.style.offsetWidth + 20}px`;
        outerRing.style.height = `${e.height + 10}px`;
      } else {
        outerRing.style.width = '20px';
        outerRing.style.height = '20px';
      }

    }
    document.addEventListener('mousedown', mouseDownHighlighter);

    const mouseClickHighlighter = (e) => {
      outerRing.style.width = '40px';
      outerRing.style.height = '40px';
    }
    document.addEventListener('click', mouseClickHighlighter);

    const highlightLink = (ele) => {
      outerRing.style.left = `${ele.offsetLeft + (ele.offsetWidth) / 2 - 1}px`;
      outerRing.style.top = `${ele.offsetTop + (ele.offsetHeight / 2) - 1}px`;
      outerRing.style.width = `${ele.offsetWidth + 15}px`;
      outerRing.style.height = `${ele.offsetHeight + 15}px`;
      outerRing.style.borderRadius = '12px';
      outerRing.style.background = 'var(--red)';
      outerRing.style.zIndex = '-1';
      isOnElement = true;
    };
    pageLinks.forEach((link) =>
      link.addEventListener('mouseenter', highlightLink.bind(null, link, false))
    );

    const unHighlightLink = () => {
      outerRing.style.width = '40px';
      outerRing.style.height = '40px';
      outerRing.style.background = 'transparent';
      outerRing.style.borderRadius = '50%';
      outerRing.style.zIndex = 'auto';

      isOnElement = false;
    };
    pageLinks.forEach((link) =>
      link.addEventListener('mouseleave', unHighlightLink)
    );
  }, []);
  return (
    <CursorStyle>
      <div id="outer-ring" />
      <div id="inner-dot" />
    </CursorStyle>
  );
}
