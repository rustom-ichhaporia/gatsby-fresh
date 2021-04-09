import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { motion } from 'framer-motion';

const PageStyle = styled(motion.div)`
  font-size: 30px;
  line-height: 1.3em;
  margin: auto;
`;

const SectionLink = styled.h1``;

export default function FullMenu() {
  return (
    <PageStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.0 }}
      exit={{ opacity: 0 }}
      // transition={{ delay: 1 }}
    >
      <SectionLink>
        <Link to="/about">ABOUT</Link>
      </SectionLink>
      <SectionLink>
        <Link to="/experience">EXPERIENCE</Link>
      </SectionLink>
      <SectionLink>
        <Link to="/projects">PROJECTS</Link>
      </SectionLink>
    </PageStyle>
  );
}
