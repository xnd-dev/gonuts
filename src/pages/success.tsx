import type { NextPage } from 'next'
import { IconContext } from 'phosphor-react'
import React from 'react'
import { IconFeatures } from '../components/Banner/IconFeatures'
import { Header } from '../components/Header'
import { CartProduct } from '../models/Cart'
import { BodyContainer } from '../styles/pages/homeStyles'
import { defaultTheme } from '../styles/themes/theme'
import { useRouter } from 'next/router'
import { Error } from '../components/Error'

interface paymentInterface {
  credit: string,
  debit: string,
  money: string
}

const Home: NextPage = () => {
  const router=useRouter();  
  const payment : paymentInterface ={
    credit:"Cartão de Crédito",
    debit:"Cartão de Débito",
    money:"Dinheiro"
  };
  function timeFormat(seconds: number): string{
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds/60)-(hours*60));
      
      return ((hours!=0?hours+' horas e ':'')+minutes+' minutos');
    }

  if (JSON.stringify(router.query)=="{}"){
    return(
      <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { [] as CartProduct[] } AddToCart = { () =>{return false;} } />
          <Error />
        </div>
      </main>
    </BodyContainer>
    );
  }
  else {
  const quotemarksCorrectionPayment = JSON.stringify(router.query.paymentType).replace(/[\\"]/g, '');
  const paymentDescription= payment[quotemarksCorrectionPayment as keyof paymentInterface];
  const estimatedSecondsTime = Math.random()*10000;

  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header 
            currentCart = { [] as CartProduct[] } 
            AddToCart = { () =>{return false;} } 
          />
          <div className='background_success'></div>
          <div className='bodySuccess'>
            <h2 className='h2Success'>Tudo pronto!</h2>
            <span className='spanSuccess'>Agora é só aguardar no seu sofá o donut mais gostoso da galáxia vir até você.</span>
            <div className='divSuccessColumns'>
              <div className='divLeftContainer'>
                <div className='divLeft'>
                  <IconContext.Provider
                      value={{
                          color: defaultTheme.darkpink,
                          size: 15,
                          weight: "bold",
                          mirrored: false,
                      }}
                  >
                    <IconFeatures 
                      icon="MapPin" 
                      color={ defaultTheme.baseHover } 
                      description={[
                          'Entrega em ', 
                          router.query.street+', '+router.query.houseNumber,
                          router.query.district+(router.query.complement?', '+router.query.complement:"")+' - '+router.query.city+','+router.query.stateAbbreviation,
                          '']}
                      distance="21px 0px"    
                    />
                    <IconFeatures 
                      icon="Timer" 
                      color={ defaultTheme.yellowLight } 
                      description={[
                          'Tempo estimado para entrega:','', 
                          '',timeFormat(estimatedSecondsTime)]}
                      distance="21px 0px"    
                    />
                    <IconFeatures 
                      icon="CurrencyDollar" 
                      color={ defaultTheme.acqua } 
                      description={[
                          'Forma de pagamento (na entrega):','', 
                          '',paymentDescription]}
                      distance="21px 0px"    
                    />              
                  </IconContext.Provider>    
                </div>
              </div>
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}
}

export default Home
