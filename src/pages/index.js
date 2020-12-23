import React from "react"
import styled from "styled-components"
import GlobalStyle from '../globalStyles';
import Icon from '../icons'
import { siteMetadata } from "../../gatsby-config";

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
  line-height: 10vw;
  letter-spacing: 0.2em;
  overflow: hidden;

  .buttons {
    font-size: 3vw;
    padding-right: 2vw;
  }
`

const linkBox = styled(Container)`
  // font-size: 4vw; 
`

const Cursor = styled.div`

`;

{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> */}


document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector("#cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

// $('div').on("mouseover", function(){
//   $('#cursor').css({'transform': 'scale(2)'});
// });

// $('div').on("mouseleave", function(){
//   $('#cursor').css({'transform': 'scale(1)'});
// });

export default function MainPage() {
  // const updateProperties = (elem, state) => {
  //   elem.style.setProperty('--x', `${state.x}px`)
  //   elem.style.setProperty('--y', `${state.y}px`)
  //   elem.style.setProperty('--width', `${state.width}px`)
  //   elem.style.setProperty('--height', `${state.height}px`)
  //   elem.style.setProperty('--radius', state.radius)
  //   elem.style.setProperty('--scale', state.scale)
  // }
  
  // document.querySelectorAll('.cursor').forEach(cursor => {
  //   let onElement
  
  //   const createState = e => {
  //     const defaultState = {
  //       x: e.clientX,
  //       y: e.clientY,
  //       width: 40,
  //       height: 40,
  //       radius: '50%'
  //     }
  
  //     const computedState = {}
  
  //     if (onElement != null) {
  //       const { top, left, width, height } = onElement.getBoundingClientRect()
  //       const radius = window.getComputedStyle(onElement).borderTopLeftRadius
  
  //       computedState.x = left + width / 2
  //       computedState.y = top + height / 2
  //       computedState.width = width
  //       computedState.height = height
  //       computedState.radius = radius
  //     }
  
  //     return {
  //       ...defaultState,
  //       ...computedState
  //     }
  //   }
  
  //   document.addEventListener('mousemove', e => {
  //     const state = createState(e)
  //     updateProperties(cursor, state)
  //   })
  
  //   document.querySelectorAll('a, button').forEach(elem => {
  //     elem.addEventListener('mouseenter', () => (onElement = elem))
  //     elem.addEventListener('mouseleave', () => (onElement = undefined))
  //   })
  // })
  
  return (
    <>
      <GlobalStyle />
      {/* <div class="cursor"></div> */}
      <div id="cursor"></div>

      

      <Container>

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