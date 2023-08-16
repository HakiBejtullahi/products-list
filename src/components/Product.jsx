import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  background-color: var(--sec-500);
  display: grid;
  grid-template-columns: 1fr auto;
  box-shadow: var(--shadow-1);
  border-radius: 30px;
  width: 100%;
  border: 3px solid var(--primary-700);
  max-width: 24rem;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-3);
    scale: 1.02;
  }
  .product-inner {
    display: grid;
    grid-template-columns: auto 1fr;
    .product-img {
      width: 4rem;
      border-radius: 28px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
    .product-info {
      .product-title {
        color: var(--white);
        font-weight: bolder;
        font-size: 1.2rem;
        border-bottom: 2px solid var(--primary-700);
        padding-top: 0.2rem;
        padding-bottom: 0.4rem;
        text-transform: uppercase;
        margin-left: 0.2em;
      }
      .product-footer {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.4rem;
      }
      .product-category {
        color: var(--grey-200);
        text-transform: capitalize;
        font-style: italic;
        letter-spacing: 1.2px;
        font-size: 0.625rem;
      }
      .product-price {
        color: var(--grey-100);
        font-size: 0.875rem;
        font-weight: bolder;
      }
    }
  }
  .order-btn {
    cursor: pointer;
    border-radius: 27px;
    padding: 0 1rem;
    height: 100%;
    border: none;
    text-transform: uppercase;
    font-weight: bolder;
    color: var(--grey-300);
    transition: var(--transition);
    background-color: var(--primary-700);
    &:hover {
      background-color: var(--primary-500);
      color: var(--white);
    }
  }
  .product-top {
    display: none;
  }

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'd d d' 'a a a' 'a  a a' 'c c c';
    border-radius: 25px;
    overflow: hidden;

    .product-top {
      display: block;
      width: 100%;
      min-height: 2rem;
      grid-area: d;
      background-color: var(--primary-700);
      color: white;
      font-weight: bolder;
      letter-spacing: 2px;
      text-transform: capitalize;
      font-size: 1.2rem;
      text-align: center;
    }
    .product-inner {
      display: grid;
      grid-template-columns: auto 1fr;
      width: 100%;
      grid-area: a;
      overflow: hidden;
      height: 1.5rem;
      background-color: #5e2400;
      .product-img {
        opacity: 0;
        width: 6rem;
        border-radius: 0;
        transition: all 0.2s ease-in;
      }
      .product-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .order-btn {
      grid-area: c;
      min-height: 2rem;
      font-size: 1.2rem;
      letter-spacing: 3px;
      margin: 0;
      border-radius: 0px;
    }
    &:hover .product-inner {
      transition: all 0.5s ease-in-out;
      height: 6rem;
      .product-img {
        opacity: 1;
      }
    }
    &:hover .product-top {
      color: transparent;
      transition: all 0.2s ease-in;
    }
  }
`;
const Product = ({ id, name, category, price, image: img }) => {
  return (
    <Wrapper className='product'>
      <span className='product-top'>{name}</span>
      <div className='product-inner'>
        <img src={img} alt={name} className='product-img' />
        <div className='product-info'>
          <h3 className='product-title'>{name}</h3>
          <footer className='product-footer'>
            <p className='product-category'>{category}</p>
            <p className='product-price'>${price}</p>
          </footer>
        </div>
      </div>
      <button className='order-btn'>add</button>
    </Wrapper>
  );
};

export default Product;
