import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import carouselItem1 from './Home.png';
import carouselItem2 from './bannerImage2.jpg';
import carouselItem4 from './bannerImage4.jpg';
import './MainCarousel.css'

function MainCarousel() {
  return (
    <div className='Main-Caraousel'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carouselItem1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carouselItem2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carouselItem1} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default MainCarousel;
