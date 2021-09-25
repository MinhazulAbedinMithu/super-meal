import React, { useContext } from 'react';
import { CartContext } from '../../App';
import './Cart.css';


const Cart = () => {
  const [mealsCart] = useContext(CartContext);
  return (
    <div className="cart">
      {
        mealsCart?.map((meal) => <h2>{meal.strMeal}</h2>)
      }
    </div>
  );
};

export default Cart;