import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  place-items: center;
`;
const Products = ({ products }) => {
  return (
    <Wrapper className='products-container'>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

export default Products;
