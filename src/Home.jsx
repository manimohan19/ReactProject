
import React, { useContext } from 'react';
import { cartContext } from './App';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { cartCount, setCartCount } = useContext(cartContext);
  const navigate = useNavigate();

  function increment() {
    setCartCount(cartCount + 1);
  }
 function decrease() {
  setCartCount(cartCount > 0 ? cartCount - 1 : 0);
}
  function cartPage() {
    navigate("/cart");
  }

  return (
    <div>
      <h1>Home Page</h1>

      <h2>Cart Items: {cartCount}</h2>

      <button onClick={increment}>Add Item</button>
      <button onClick={cartPage}>Go To Cart</button>
      <button onClick={decrease}>- Item</button>
    </div>
  );
}

export default Home;