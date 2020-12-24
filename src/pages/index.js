import React from "react"
import styled from "styled-components"
import GlobalStyle from '../globalStyles';
import Icon from '../icons'
import { siteMetadata } from "../../gatsby-config";
import portrait from "../../images/portrait.png";

const Container = styled.div`
  background-color: var(--dark-grey);
  color: var(--white);
  height: 100vh;
  margin: 0px;

  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 6vw;
  font-weight: lighter;
  line-height: 8avw;
  letter-spacing: 0.2em;
  // overflow: hidden;

  .buttons {
    font-size: 3vw;
    padding-right: 2vw;
  }

  p {
    margin: 0px;
  }

  img {
    margin-top: 10vh;
    width: 20vw;
  }
`

const linkBox = styled(Container)`
  // font-size: 4vw; 
`

const Cursor = styled.div`

`;

document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

export default function MainPage() {


  // const $ = window.$;


{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> */}

  
  // $('div').on("mouseover", function(){
  //   $('#cursor').css({'transform': 'scale(2)'});
  // });
  
  // $('div').on("mouseleave", function(){
  //   $('#cursor').css({'transform': 'scale(1)'});
  // });
  
  return (
    <>
      <GlobalStyle />
      <div id="cursor"></div>

      

      <Container>

        <img src={portrait} alt="Portrait" />

        <p>RUSTOM<br />ICHHAPORIA</p>

        <linkBox>

          {siteMetadata.socialMedia &&
            siteMetadata.socialMedia.map(({ url, name }, i) => (
              <a href={url} aria-label={name} target="_blank" rel="noreferrer" className="buttons">
                <Icon name={name} />
              </a>
            ))}

        </linkBox>

      </Container>
    </>
  )
}