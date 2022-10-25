import type { NextPage } from 'next'
import React from 'react'
import { Header } from '../components/Header'
import { MainPage } from '../components/MainPage'
import { BodyContainer } from '../styles/pages/homeStyles'
import { useCart } from '../components/hooks/useCart'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  const { currentCart,AddToCart } =useCart();
  return (
    <BodyContainer>
      <div className="Container">
        <Header currentCart = { currentCart } AddToCart = { AddToCart } />
        <main>
              <MainPage AddToCart={ AddToCart } />
        </main>
      </div>
      <Footer/>
    </BodyContainer>
  )
}

export default Home
