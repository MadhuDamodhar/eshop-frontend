import React from 'react'
import './hero.css'
import pic from '../Home/product-animated3.gif'
import {Link} from 'react-router-dom'
function hero() {
  return (
    <div className='hero-section'>
    <div className='left-section'>
    <div className='first-para'>
    <span className="welcome">Welcome
     <br></br>to </span><span className='name'>E-shop...!</span>
     </div>
     <p>Unlock a world of possibilities and connect with millions of shoppers by joining E-Shop today ! With our powerful selling tools, flexible plans, and dedicated support, it's never been easier to expand your business online. Sign up now and start selling smarter, not harder !
     <br></br>
     <span className='highlighted'>Discover Opportunity. Discover Success. Join Us Today !
     </span>
     </p> 
   <Link className='link' to="/signUp"><button className='start-btn'>Start Selling</button></Link>
    
    
    </div>
    
    <div className='right-section1'>
    <img src={pic} />
    </div>
    </div>
    
  )
}

export default hero