import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./Home";
import Cart from "./Cart";
import './App.css'
export const cartContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <cartContext.Provider value={{ cartCount, setCartCount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App; 
