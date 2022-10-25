import styled from "styled-components"

export const HoverCardCart = styled.button`
 *{
    transition: 0.2s; 
  }
  transition: 0.2s; 
  border: none;
  display: flex;
  border-radius:6px;
  z-index:5;
  justify-content:center;
  align-items:center;
  background:${(props) => props.theme.yellowLight};
  color:${(props) => props.theme.powerpink};
  padding:8px 10.75px; 
  border:2px dotted ${(props) => props.theme.powerpink};

  :disabled{
    filter: brightness(0.7);
    color:${(props) => props.theme.acquaDark};
    border:none;
  }

  .CartDivQtd{
      width:20px;
      height:20px; 
      background:${(props) => props.theme.acquaDark};
      color:${(props) => props.theme.white}; 
      font-weight: bold; 
      font-size: 12px; 
      border-radius:50%;
      text-align: center; 
      line-height:20px; 
      position:absolute; 
      top:-8px;
      right:-8px;
      display:inline-block; 
  }

`;


export const DivHeaderContainer = styled.div`
    padding:32px 32px 0px 32px;
    z-index:2;
    text-align:justify; 
    width:100%;
    position:relative;
    display: flex; 
    justify-content: space-between;  
    min-width:800px; 
    border-radius:1vw;
    //box-shadow:0px 0px 30px ${(props) => props.theme.acquaDark};
    
    *{
        transition: 1s; 
        position:relative;  
        vertical-align: middle; 
        display:flex; 
        justify-content: space-between;
    }
    .logo{
        height:100px; 
        display: block; 
        margin-right: 10px;
        margin-top:-20px;
        background-image:url("png/donuts_logo.png");
        background-size: auto 100%;
        background-repeat: no-repeat;
        width:20%;
    }
    .div_header_direita{
        display: flex; 
        justify-content: flex-end; 
        min-width:400px;
        height: 38px;
        gap:12px;

        .linkCursor{cursor:pointer;}
    }

`