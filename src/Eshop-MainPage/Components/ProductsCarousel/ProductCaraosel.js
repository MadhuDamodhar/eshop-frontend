import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';
import productService from '../Service/productService';
import poster from '../ProductsCarousel/poster.jpeg';
import Card from './Card';

function ProductCaraosel() {
  const [products, setProductsList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService.getAllProductsDetails()
      .then((product) => {
        setProductsList(product.data.content);
        console.log(product.data.content);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div className='wrapper'>
    <h2> -: Best Of Sales :-</h2>
    <div className='ProductBannerItems1'>
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id} // Assuming each product has a unique 'id'
                productName={product.productName}
                productPrice={product.productPrice}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
    </div>
    <div className='ProductBannerItems2'>
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id} // Assuming each product has a unique 'id'
                productName={product.productName}
                productPrice={product.productPrice}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
       
   
  
    </div>
    </div>
  );
}

export default ProductCaraosel;
