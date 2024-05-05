import React from 'react'
import Hero from './hero'
import Guide from './guide'
import Footer from '../Footer/footer'
import Header from "../Header/header";
function home() {
  return (
    <div>
    <Header />
    <Hero/>
    <Guide/>
    <Footer/>
    </div>
  )
}

export default home