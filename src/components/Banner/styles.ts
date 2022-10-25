import styled from "styled-components"

interface IconFeaturesProps{
    color:string;
    distance:string;
}

export const IconFeaturesContainer = styled.div<IconFeaturesProps> `
    color: ${(props) => props.theme.darkpink};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    margin:${(props) => props.distance};

    .IconSpan{
        color:${(props) => props.color};
        background-color: ${(props) => props.color};
        border-radius:50% 50%;
        height:32px;
        width:32px;
        line-height: 32px;
        min-width: 32px;
        text-align:center;
        display: inline-block;
        margin-right:12px;
        position:relative;
        vertical-align: middle;
        svg {
            position:absolute; 
            top:9px;
            left:9px;
            display:inline;
        }
    }    
    .IconDescription{
        font-size: 16px;
        line-height:130%;
    }    
`

export const BannerContainer = styled.div `
    
    height:fit-content;
    display:block;
    width:100%;
    position:relative;
    margin-bottom:2%;

    .BannerBackground{
        background: url("/png/background.png") no-repeat;
        filter:blur(20px);
        background-position: center center;
        background-size:100%;
        position:absolute;
        z-index: 0;
        top:-30%;
        left:0px;
        width:100%;
        height:130%;
    }
    
    .DivBanner{
        display:flex;
        width:100%;
        
        .DivRight{
            z-index: 1;
            padding-top:94px;
            width:63%;
            padding-right:5%;
            h1{ margin-top:0px;
                font-size:42px;
                font-family:'Baloo 2', cursive;
                font-weight:800;
                color: ${(props) => props.theme.baseTitle};
                align-self: stretch;
                line-height:130%;
            }
            h2{
                margin-top:16px;
                font-weight: 400;
                font-size:20px;
                line-height:130%;
                font-family: 'Roboto', sans-serif;
                color: ${(props) => props.theme.baseSubTitle};
                .risc{text-decoration:line-through}
            }
            .DivFeatures{
                margin-top:60px;
                div{min-width:48%;
                    max-width:52%;
                    display:inline-block;
                    line-height:32px;
                }                
            }
        }
        .DivLeft{
            width:33%;
            margin-top:0%;
            margin-right:4%;
            z-index: 1;
            img{
                width:100%;
                border-radius:2vw;
                border-bottom:3px dotted ${(props) => props.theme.powerpink};
            }
        }
    }
`
