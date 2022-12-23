import { Link } from 'react-router-dom';
import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <img className="brand" src="/images/logo_white.png" alt="amazon" />
        </Link>
      </header>
      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data.products.map((product, i) => (
            <div className="product" key={i}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product_info">
                <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>₹{product.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
