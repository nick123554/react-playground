import React from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Товар 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 200,
  }
]

function App() {
  const [count, setCount] = React.useState(0);
  const [product, setProduct] = React.useState(products);


  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginBottom: 20}}>
          Товаров в корзине {count}
        </p>
        <div>
          {product.map((item) => {
            return (
              <div style={{border: "1px solid red", marginBottom: 20}}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={handleCount}>Добавить в корзину</button>
              </div>
            )
          })}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
