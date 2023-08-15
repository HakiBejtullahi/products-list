import React from 'react';
import data from '../data';
import { useState } from 'react';

const Categories = ({ categories, setCategories, currentCategoryID }) => {
  return (
    <div className='categories-container'>
      {categories.map((category, i) => {
        return (
          <button
            className={
              currentCategoryID === category ? `btn btn-active` : 'btn'
            }
            key={i}
            onClick={() => {
              setCategories(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
