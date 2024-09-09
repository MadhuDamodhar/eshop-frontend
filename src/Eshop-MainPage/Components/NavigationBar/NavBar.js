import React, { useState } from 'react';
import './NavBar.css';
import searchIcon from '../NavigationBar/search.png';
import { Link } from 'react-router-dom'; // Use this if you use React Router

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <header>
        <nav>
          <div className="brand">
            <h1 id='brand'>E-Shop.in</h1>
          </div>
          
          <div className="search__bar__header">
            <div className="dropdown1">
              <select name="Categories" id="Categories">
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothes">Clothes</option>
              </select>
            </div>
            <input type="text" placeholder="Search for products, brands, and more..." />
            <button>
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </div>
          <div className="cart__header__desktop">
            <i className="fas fa-shopping-cart"></i>
            <span>50</span>
          </div>
        </nav>
      </header>

      <div className="main__navigations">
        <div className="main__navigations__div">
          <ul className="main__navigations__div__ul">
            <li className="main__navigations__div__li on__mobile_d_none" style={{ fontWeight: 'bold' }}>
              <a className='home_a' href="#home"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg> Home</a>
            </li>
            <li className="main__navigations__div__li on__mobile_d_none">
              <Link to="/seller" className="categ" style={{ fontWeight: 'bold' }}>
                Become a seller <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z"/>
              </svg>
              </Link>
              {/* Uncomment this if you want to show categories on hover
              <div className="div__categories__items">
                <p><a href="#category1">Category 1</a></p>
                <p><a href="#category2">Category 2</a></p>
                <p><a href="#category3">Category 3</a></p>
                <p><a href="#category4">Category 4</a></p>
                <p><a href="#category5">Category 5</a></p>
              </div>
              */}
            </li>
            <li className="main__navigations__div__li save__from__left">
              <a href="#profile" className="anchor__remains__same" style={{ fontWeight: 'bold' }}>
                <i className="fas fa-user"></i> Hello, Parimal Mahindrakar.
              </a>
            </li>
            <li className="main__navigations__div__li">
              <Link to="/UserRegistrations" className="anchor__remains__same" style={{ paddingBottom: 0, fontWeight: 'bold' }}>
                Logout <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>
          </ul>
          <div className={`bars save__from__right ${menuOpen ? 'toggle' : ''}`} onClick={handleMenuToggle}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>

      <div className={`mobile__nav__fade__and__show ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile__nav__fade__and__show__text">
          <li><a href="#home">Home</a></li>
          <li>
            <a href="#categories">Categories</a>
            <div>
              <p><a href="#category1">Category 1</a></p>
              <p><a href="#category2">Category 2</a></p>
              <p><a href="#category3">Category 3</a></p>
              <p><a href="#category4">Category 4</a></p>
              <p><a href="#category5">Category 5</a></p>
            </div>
          </li>
        </ul>
      </div>
      <div className={`mobile__nav__fade__and__show__circle ${menuOpen ? 'open' : ''}`}></div>
    </div>
  );
}

export default NavBar;
