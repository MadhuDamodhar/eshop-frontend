import React from 'react'
import './header.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
function Header() {
  const [headerBg, setHeaderBg] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1100) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    });
  });
  return (
    <div className={`${headerBg ? "blackheader" : ""} header`}>
    <h2>Seller's Page</h2>
    <div className='header-right'>
    <Link className='link' to="/signUp"><button className='start-selling'>Start Selling</button></Link>
    <Link className='link' to="/logIn"><button className='login'>Login</button></Link>
    </div>
    </div>
  )
}

export default Header