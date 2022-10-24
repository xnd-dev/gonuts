import { IconContext} from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/theme';
import { IconFeatures } from './IconFeatures';
import { BannerContainer } from './styles'


export function Banner () {
    return (
        <BannerContainer>
            <div className='DivBanner'>
                <div className='DivLeft'>
                    <img src='png/banner_img.png'/>
                </div>  
                <div className='DivRight'>
                    <h1>Go nuts com os nossos Donuts</h1>
                    <h2>🍩 Os donuts mais deliciosos da Terra <span className='risc'>Média</span> 😋</h2>
                    <div className='DivFeatures'>
                    <IconContext.Provider
                            value={{
                                color: defaultTheme.yellowLight,
                                size: 15,
                                weight: "bold",
                                mirrored: false,
                            }}
                        >
                            <IconFeatures 
                                icon="pawPrint" 
                                color={ defaultTheme.powerpink } 
                                description={['Todos os donuts são veganos', '', '', '']}
                            />
                            <IconFeatures 
                                icon="package" 
                                color={ defaultTheme.powerpink } 
                                description={['Embalagens recicláveis', '', '', '']} 
                            />
                            <IconFeatures 
                                icon="gauge" 
                                color={ defaultTheme.powerpink } 
                                description={['Entrega rápida e segura', '', '', '']} 
                            />
                            <IconFeatures 
                                icon="cookingPot" 
                                color={ defaultTheme.powerpink } 
                                description={['Sempre fresquinhos, feitos no dia', '', '', '']} 
                            />
                        </IconContext.Provider>
                    </div>
                </div>              
                <div className='BannerBackground'></div>
          </div>    
        </BannerContainer>    )
} 