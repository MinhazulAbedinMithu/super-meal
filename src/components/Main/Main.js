import React from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import "./Main.css";


const Main = () => {
  return (
    <div className="container">
      <Shop/>
      <Cart/>
    </div>
  );
};

export default Main;