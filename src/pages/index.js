import React from "react"
import styled from "styled-components"
import GlobalStyle from '../globalStyles';
import Icon from '../icons'
import { siteMetadata } from "../../gatsby-config";

const Container = styled.div`
  background-color: var(--navy);
  color: var(--white);
  height: 100vh;
  margin: 0px;

  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 8vw;
  font-weight: 200;
  line-height: 10vw;
  letter-spacing: 0.2em;
  overflow: hidden;
`

const linkBox = styled.div`
  padding-left: 25px;
`;

export default function MainPage() {

  return (
    <>
      <GlobalStyle />
      <Container>

        <p>RUSTOM<br />ICHHAPORIA</p>

        <linkBox>
          {siteMetadata.socialMedia &&
            siteMetadata.socialMedia.map(({ url, name }, i) => (
              <a href={url} aria-label={name} target="_blank" rel="noreferrer" style={{ paddingRight: '2vw' }}>
                <Icon name={name} />
              </a>
            ))}
        </linkBox>

      </Container>
    </>
  )
}