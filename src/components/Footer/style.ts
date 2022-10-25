import styled from "styled-components"

export const FooterContainer = styled.button`
 border-radius:60px 60px 0 0;
 font-family: 'Roboto', sans-serif;
 padding:30px;
 text-align: center;
 color:${(props) => props.theme.yellowLight};
 font-size:1em;
 border:none;
 border-bottom:3px dotted ${(props) => props.theme.powerpink};
 background-color:${(props) => props.theme.powerpink};
 width: 100%;
 margin:0 auto;
 
 .center{
    max-width:960px;
    margin:0 auto;
    line-height: 1.5rem;
    a{
        font-weight:bold;
        color:${(props) => props.theme.poweryellow};
    }
 }

`