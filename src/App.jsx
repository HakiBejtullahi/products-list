import data from './data';
import Product from './components/Product';
import Categories from './components/Categories';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import { getAllCategories } from './utils/getCategories';

const App = () => {
  const [categories, setCategories] = useState(getAllCategories(data));
  const [currentCategoryID, setCurrentCategoryID] = useState('all');
  const [products, setProducts] = useState(data);

  const filterProducts = (text) => {
    return data.filter((item) => {
      if (text === 'all') {
        return item;
      }
      return item.category === text;
    });
  };

  useEffect(() => {
    const newProducts = filterProducts(currentCategoryID);
    setProducts(newProducts);
  }, [currentCategoryID]);

  return (
    <main>
      <div className='section-center'>
        <h2 className='section-title'>Pick and order</h2>
        <Categories
          categories={categories}
          setCategories={setCurrentCategoryID}
          currentCategoryID={currentCategoryID}
        />
        <SearchBar />
        <div className='products-container'>
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </main>
  );
};
export default App;
