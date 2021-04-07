import React, { useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { theme } from '@styles';

import { gsap } from 'gsap';
import $ from 'jquery';

const CursorDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.textLight};
  // z-index: 2000;
  user-select: none;
  pointer-events: none;
`;

const FollowerDiv = styled.div`
  border: 2px solid ${(props) => props.theme.colors.accent};
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // opacity: 0.7;
  user-select: none;
  pointer-events: none;
`;

export default function Cursor() {
  const accentColor = theme.colors.accent;

  useLayoutEffect(() => {
    gsap.set('.follower', { xPercent: -50, yPercent: -50 });
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var follow = document.querySelector('.follower');
    var cur = document.querySelector('.cursor');
    var pageLinks = document.querySelectorAll('a');
    let isOnElement = false;

    window.addEventListener('mousemove', (e) => {
      gsap.to(cur, { x: e.clientX, y: e.clientY, ease: 'power3.out' });
      if (!isOnElement) {
        gsap.to(follow, {
          x: e.clientX,
          y: e.clientY,
        });
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (isOnElement) {
        gsap.to(cur, {
          width: cur.offsetWidth - 20,
          height: cur.offsetHeight - 20,
        });
      } else {
        gsap.to(follow, { width: '20px', height: '20px' });
      }
    });

    window.addEventListener('mouseup', () => {
      if (!isOnElement) {
        gsap.to(follow, { width: '40px', height: '40px' });
      }
    });

    $('a').mouseenter(function (e) {
      callHelper(e, this);
    });

    function callHelper(e, parent) {
      var boundingRect = parent.getBoundingClientRect();
      isOnElement = true;
      gsap.to(follow, {
        x: boundingRect.x + boundingRect.width / 2,
        y: boundingRect.y + boundingRect.height / 2,
        width: boundingRect.width + 15,
        height: boundingRect.height + 15,
        borderRadius: '12px',
        background: accentColor,
        zIndex: -1,
      });
    }

    const unHighlightLink = () => {
      isOnElement = false;
      gsap.to(follow, {
        width: 40,
        height: 40,
        background: 'transparent',
        borderRadius: '50%',
        // zIndex: 'auto',
      });
    };
    pageLinks.forEach((link) =>
      link.addEventListener('mouseleave', unHighlightLink)
    );
  }, []);

  return (
    <>
      <FollowerDiv className="follower" />
      <CursorDiv className="cursor" />
    </>
  );
}
