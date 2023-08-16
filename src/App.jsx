import data from './data';
import Products from './components/Products';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import { getAllCategories } from './utils/getCategories';

const App = () => {
  const [products, setProducts] = useState(data);
  const [categories, setCategories] = useState(getAllCategories(data));
  const [currentCategoryID, setCurrentCategoryID] = useState('all');
  const [searchInput, setSearchInput] = useState('');

  const filterProducts = (text) => {
    return data.filter((item) => {
      if (text === 'all') {
        return item;
      }
      return item.category === text;
    });
  };
  const searchProducts = (name) => {
    return data.filter((item) => {
      if (item.name.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
        return item;
      }
    });
  };

  useEffect(() => {
    const newProducts = filterProducts(currentCategoryID);
    setProducts(newProducts);
  }, [currentCategoryID]);
  useEffect(() => {
    setProducts(searchProducts(searchInput));
  }, [searchInput]);

  return (
    <main>
      <div className='section-center'>
        <h2 className='section-title'>Pick and order</h2>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchProducts={searchProducts}
        />
        <Categories
          categories={categories}
          setCategories={setCurrentCategoryID}
          currentCategoryID={currentCategoryID}
        />
        <Products products={products} />
      </div>
    </main>
  );
};
export default App;
