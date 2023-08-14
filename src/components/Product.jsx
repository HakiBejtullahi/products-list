import React from 'react';

const Product = ({ id, name, category, price, image: img }) => {
  return (
    <article className='product'>
      <img src={img} alt={name} className='product-img' />
      <div className='product-info'>
        <h3 className='product-title'>{name}</h3>
        <footer className='product-footer'>
          <p className='product-category'>{category}</p>
          <p className='product-price'>${price}</p>
        </footer>
      </div>
      <button className='order-btn'>add</button>
    </article>
  );
};

export default Product;
