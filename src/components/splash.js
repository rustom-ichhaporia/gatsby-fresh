import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { navigate } from 'gatsby';

import { useTriggerTransition } from 'gatsby-plugin-transition-link';
import Lottie from 'lottie-react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

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

  const lottieRef = useRef();

  // const trans = useTriggerTransition({
  //   to: '/full-menu',
  // });

  // const something = navigate('/about');

  const triggerTransition = () => {
    // {
    //   isToggled && navigate('/about');
    // }
    lottieRef.current.setDirection(-1);
    lottieRef.current.play();
    toggle(!isToggled);
  };

  return (
    <motion.div
      initial={{}}
      animate={{ transition: { staggerChildren: 0.125 } }}
      exit={{ opacity: 0.2 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animation}
        loop={false}
        onEnterFrame={() => {
          lottieRef.current.setSpeed(3);
        }}
        onComplete={() => {
          isToggled && navigate('/full-menu');
          lottieRef.current.setDirection(-1);
          lottieRef.current.play();
          toggle(!isToggled);
        }}

        // onClick={() => {
        //   lottieRef.current.setDirection(-1);
        //   lottieRef.current.play();
        //   toggle(!isToggled);
        // }}
      />
    </motion.div>
  );
}
