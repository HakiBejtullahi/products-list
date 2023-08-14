import data from './data';
import Product from './components/Product';

const App = () => {
  console.log(data);
  return (
    <main>
      <div className='section-center'>
        <h2 className='section-title'>Pick and order</h2>
        <div className='products-container'>
          {data.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </main>
  );
};
export default App;
