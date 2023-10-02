import { css } from "@emotion/react";
const breakpoints = [576, 768, 992, 1200]

const containerStyle = css({ display: 'flex', height: '100vh', width: '100vw',padding: '32px 16px' })
const innerStyle = css`
display:flex;
width:80%;
flex-direction:column;
align-items:center;
height:500px;

flex:1;
    @media (min-width: ${breakpoints[0]}px) {
        flex-direction:row;
        align-items:flex-start;
        overflow:hidden;
    }
  `

  const leftStyle = css`
display:flex;
width:100%;
flex-direction:column;
gap:8px;
flex:3;
height:100%;

l;

  `


  const rightStyle = css`
display:flex;
width:100%;
flex-direction:column;
gap:8px;
flex:1;

  `


export { containerStyle, innerStyle,leftStyle,rightStyle }