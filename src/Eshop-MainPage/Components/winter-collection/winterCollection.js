import React from 'react';
import videoBanner from '../winter-collection/winter-collection-banner.mp4';
import winterCollectionImage from '../winter-collection/winter-collection-1.jpg'; 
import './winterCollection.css';

function WinterCollection() {
  return (
    <div className='winterCollection'>
      <div className='video-banner'>
      <video autoPlay loop muted style={{ width: '100vw', height: '50vh', objectFit: 'fill' ,border:'10px solid black' }}>
      <source src={videoBanner} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    
      </div>
      <div className='winterCollection-cards'>
       <div className='Collection-Cards'>
       <div className="card">
       <div className="image">
         <img src={winterCollectionImage} alt="Winter Collection 1" />
       </div>
       <div className="productTitle">
         New Collection
       </div>
       <div className="cost">
         Price Starts from $10
       </div>
       <button className="addtocart">Add to Cart</button>
     </div>

     <div className="card">
       <div className="image">
         <img src={winterCollectionImage} alt="Winter Collection 2" />
       </div>
       <div className="productTitle">
         New Collection
       </div>
       <div className="cost">
         Price Starts from $12
       </div>
       <button className="addtocart">Add to Cart</button>
     </div>

     <div className="card">
       <div className="image">
         <img src={winterCollectionImage} alt="Winter Collection 3" />
       </div>
       <div className="productTitle">
         New Collection
       </div>
       <div className="cost">
         Price Starts from $14
       </div>
       <button className="addtocart">Add to Cart</button>
     </div>

     <div className="card">
     <div className="image">
       <img src={winterCollectionImage} alt="Winter Collection 3" />
     </div>
     <div className="productTitle">
       New Collection
     </div>
     <div className="cost">
       Price Starts from $14
     </div>
     <button className="addtocart">Add to Cart</button>
   </div>


       </div>
       <div className='NavigateCard'>
       <a href='#'>Click Here To View<br></br> More Collections.<br></br><span>&lt;</span></a>
       
       </div>
      </div>
    </div>
  );
}

export default WinterCollection;
