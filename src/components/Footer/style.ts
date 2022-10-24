import styled from "styled-components"

export const FooterContainer = styled.button`
 border-radius:1vw;
 font-family: 'Roboto', sans-serif;
 padding:30px;
 color:${(props) => props.theme.purpleDark};
 font-size:1em;
 border:none;
 border-bottom:3px dotted ${(props) => props.theme.powerpink};
 background-image:linear-gradient(to top, ${(props) => props.theme.acquaDark}, rgb(0,0,0,0));
`