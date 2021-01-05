import React from 'react';
import styled from 'styled-components';

const PageStyle = styled.div`
  font-size: 30px;
  line-height: 1.3em;
`;

export default function Home() {
  return (
    <>
      <h2>
        <a href="about">About</a>
      </h2>
    </>
  );
}
