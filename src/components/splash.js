import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { navigate } from 'gatsby';

import TransitionLink from 'gatsby-plugin-transition-link';
import Lottie from 'lottie-react';

import animation from '@images/data.json';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Splash() {
  const [isToggled, toggle] = useState(0);
  const [used, toggleUsed] = useState(0);

  function toHome() {
    navigate();
  }

  const lottieRef = useRef();

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animation}
      loop={false}
      onComplete={() => {
        if (isToggled) {
          navigate('/about/');
        }
      }}
      onClick={() => {
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
        toggle(!isToggled);
      }}
    />
  );
}

// if (used) {
//   navigate('/about');
// } else {
//   toggleUsed(!used);
//   toggle(!isToggled); }
