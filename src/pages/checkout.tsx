import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Cart } from '../components/Cart'
import { FormCard } from '../components/FormCard'
import { Header } from '../components/Header'
import { useCart } from '../components/hooks/useCart'
import { PaymentCard } from '../components/PaymentCard'
import { BodyContainer } from '../styles/pages/homeStyles'

const Home: NextPage = () => {
  const { currentCart,AddToCart } =useCart();
  const [paymentType, SetPaymentType] = useState("credit" as string); 

  return (
    <BodyContainer>
      <main>
        <div className="Container">
          <Header currentCart = { currentCart } AddToCart = { AddToCart }/>
          <div className='bodyCheckout'>
            <div className='checkoutLeft'>
              <h2 className="ProductGroupTitle">Complete seu pedido</h2>
              <FormCard paymentType={ paymentType } />
              <PaymentCard 
                paymentType = { paymentType } 
                SetPaymentType = { SetPaymentType } />
            </div>              
            <div className="checkoutRight">
              <h2 className="ProductGroupTitle">Cafés Selecionados</h2>
              <div className="cartDiv">
                <Cart 
                    AddToCart = { AddToCart } 
                    currentCart = { currentCart }
                    isInHeader = { false }
                />
              </div>
            </div>
          </div>    
        </div>
      </main>
    </BodyContainer>
  )
}

export default Home
