import styled from "styled-components"

export const BodyContainer = styled.div`
    width:100%; 
    background-color: ${(props)=>props.theme.background};

    .Container{
        padding: 0;
        margin:0 auto;
        max-width: 1120px;
        display:flex;
        flex-direction: column;
    }    
    
    .bodyCheckout{
        display:flex; 
        margin-top:40px;
        flex-direction:row;
        gap:32px;
        justify-content: space-between;
        align-content: flex-start;
        vertical-align: top;
        h2{
            font-weight: 700;
            font-family: 'Baloo 2', cursive;
            color: ${(props)=>props.theme.baseSubtTitle};
            font-size: 18px;
            line-height: 130%;
            align-items: center;
        }
        .checkoutLeft{
            width:fit-content; 
            display:flex;
            flex-direction: column;
            gap:12px;
        }
        .checkoutRight{
            gap:12px;
            display:flex;
            flex-direction: column;
            width:448px;
            .checkoutDiv{
                width:100%;
                border-radius:6px;
                justify-content:center;
                align-items:top;
                display:flex;
            }
        }
        
    }
    .background_success{
            background: url(png/background.png);
            background-position: center center;
            background-size: 70%;
            left:0px;
            right:0px;
            filter:blur(20px);
            background-repeat: no-repeat;
            z-index:1;
            border:10px solid ${(props)=>props.theme.powerpink};
            position:absolute;
            top:0px;
            bottom:0px;
        }


    .bodySuccess{  
        z-index:2;      
        .h2Success{
            font-family: 'Baloo 2', cursive;
            font-style: normal;
            text-align: center;
            font-weight: 800;
            font-size: 32px;
            line-height: 130%;
            color: ${(props)=>props.theme.powerpink};
            margin-top:80px;
            display: block;
        }
        .spanSuccess{
            z-index:2;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            display:block;
            text-align: center;
            font-weight: 400;
            font-size: 20px;
            line-height: 130%;
            color: ${(props)=>props.theme.baseSubtTitle};
            font-stretch: 100;
        }
        .divSuccessColumns{
            z-index:2;
            margin-top:30px;
            
            .divLeftContainer{
                column-count: 3;
                width:100%;
                padding-top:30px;
                width:100%;
                column-gap: 10%;

                .IconFeaturesContainer{
                    display:flex;
                    margin:0px;
                }
            }
            /*.divRight{
                background:url(png/donut_loading.png) no-repeat;
                background-position: center center;
                background-size: 80%;
                top:0%;
                bottom:-30%;
                right:5%;
                width:40%;
                position:absolute;
                /*@keyframes loading_donut {
                    0% {transform: rotate(0deg);} 
                    50% {transform: rotate(180deg);}
                    100% {transform: rotate(360deg);}
                }
                animation: loading_donut 10s infinite;
                animation-timing-function:linear;
                min-height: 293px;
                margin-left:102px;
                div .IconDescription{
                    font-size:16px;
                }                
            }*/
        }
    }
`

export const main = styled.div`
    min-height: 100vh;
    max-width: 1120px;
    padding:0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
`

