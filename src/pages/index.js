import React from "react"
import styled from "styled-components"
import GlobalStyle from '../globalStyles';
// import { FaEnvelope, FaLinkedinIn, FaGithubAlt, FaInstagram, FaTwitter } from "@meronex/icons/fa";
// import { SiGmail, SiGooglescholar } from "@meronex/icons/si";
import Icon from '../icons'
import { siteMetadata } from "../../gatsby-config";

const Container = styled.div`
  background-color: #04192e;
  color: #ffffff;
  height: 100vh;
  margin: 0px;

  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: IBM Plex Mono;
  font-size: 8vw;
  font-weight: 200;
  line-height: 10vw;
  letter-spacing: 0.2em;
  // overflow: hidden;
`

// const linkBox = styled.div`
//   display: flex;
//   background-color: "blue";
// `;

// const button = styled.button`
//   ::before {
//     content: <SiGmail />
//   }
// `;

export default function UsersList() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <p>RUSTOM<br />ICHHAPORIA</p>
        {siteMetadata.socialMedia &&
        siteMetadata.socialMedia.map(({ url, name }, i) => (
          // <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          // </li>
        ))}
        {/* <linkBox>
          <FaEnvelope />
          <FaLinkedinIn />
          <a href="https://linkedin.com/in/rustom-ichhaporia" target="_blank" rel="noreferrer"><FaGithubAlt aria-label="LinkedIn" style={{ color: "red", backgroundColor: "green" }} /></a>
          <SiGooglescholar />
          <FaTwitter />
          <FaInstagram />
        </linkBox> */}

      </Container>
    </>
  )
}