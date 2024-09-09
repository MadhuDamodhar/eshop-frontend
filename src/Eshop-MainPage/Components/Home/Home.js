import React from 'react'
import './Home.css'
import NavBar from '../NavigationBar/NavBar'
import Carousel from '../MainPageCarousel/MainCarousel'
import ProductCarousel from  '../ProductsCarousel/ProductCaraosel'
import WinterCollection from '../winter-collection/winterCollection'
function Home() {
  return (
    <div className='home'>
    <NavBar/>
    <Carousel/>
    <ProductCarousel/>
    <WinterCollection/>
    </div>
  )
}

export default Home