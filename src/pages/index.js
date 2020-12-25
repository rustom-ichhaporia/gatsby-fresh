import React, {useEffect} from "react"
import styled from "styled-components"
import GlobalStyle from '../globalStyles';
import Icon from '../icons'
import { siteMetadata } from "../../gatsby-config";
import portrait from "../images/portrait.png";

const Container = styled.div`
  background-color: var(--dark-grey);
  color: var(--white);
  height: 100vh;
  width: 100vw;
  margin: 0px;

  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 6vw;
  font-weight: 100;
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
    // margin-top: 10vh;
    width: 25vw;
  }

  // display: flex;
  // flex-direction: row;
  // flex-basis: 100%;
  .left-side, .right-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    float: left;
  }

  .left-side {
    width: 60%;

  }

  .right-side {
    width: 40%;
  }
`

const linkBox = styled.div`
`

const Cursor = styled.div`

`;



export default function MainPage() {


  // const $ = window.$;


  {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> */ }


  // $('div').on("mouseover", function(){
  //   $('#cursor').css({'transform': 'scale(2)'});
  // });

  // $('div').on("mouseleave", function(){
  //   $('#cursor').css({'transform': 'scale(1)'});
  // });

  useEffect(() => {
    document.addEventListener("mousemove", function (event) {
      const x = event.pageX - 10;
      const y = event.pageY - 10;
      const cursor = document.querySelector("#cursor");
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });

  }, []);



  return (
    <>
      <GlobalStyle />
      <div id="cursor"></div>



      <Container>


        <div class="left-side">

          <p>RUSTOM<br />ICHHAPORIA</p>

          <linkBox>
            {siteMetadata.socialMedia &&
              siteMetadata.socialMedia.map(({ url, name }, i) => (
                <a href={url} aria-label={name} target="_blank" rel="noreferrer" className="buttons">
                  <Icon name={name} />
                </a>
              ))}
          </linkBox>



        </div>


        <div class="right-side">
          <img src={portrait} alt="Portrait" />
        </div>

      </Container>
    </>
  )
}