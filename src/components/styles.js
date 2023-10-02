import { css } from "@emotion/react";
const breakpoints = [576, 768, 992, 1200]
const containerStyle = css({ display: 'block', width: '100%',flexDirection:'column'})

const itemContainerStyle = css({ display: 'flex', flexDirection:'row',minHeight:'100px',height:'100%',maxHeight:'400px',width:'100%',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',alignItems:'stretch',flex:'1' })
const innerStyle = css`
display:flex;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
flex-direction:column;
padding:16px;
align-items:center;
overflow:hidden;

gap:8px;

  `

  const leftStyle = css`
display:flex;
flex-direction:column;
padding:16px;
align-items:center;
justify-content:center;

gap:8px;
flex:2;

  `


  const rightStyle = css`
display:flex;
width:100%;
align-items:center;
padding:16px;
gap:8px;
flex:1;

  `

  const informationSideStyle = css`
  display:flex;
  width:100%;
  flex-direction:column;
  gap:8px;
  flex:1;
  
    `
  
    const paginationContainerStyle=css`
    height:100px;
    padding:16px;
    overflow:hidden;
    display:flex;
    justify-content:flex-end;
    
  
  
      `
    const btnPaginationStyle=css`
    height:30px;
    width:30px;
    
  
  
      `
export { containerStyle, innerStyle,leftStyle,rightStyle,itemContainerStyle,informationSideStyle ,btnPaginationStyle,paginationContainerStyle}