import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import "./Meal.css";

const Meal = (props) => {
	const { strMeal, strMealThumb } = props.meal;

  const [mealsCart, setMealsCart] = useContext(CartContext);

	const handleAddToCart = (meal) => {
    const data = [...mealsCart, meal];
    const newCart = [...new Set(data)];
    setMealsCart(newCart);
	};

	return (
		<div className="meal width">
				<div className="meal-img">
					<img src={strMealThumb} alt={strMeal} />
				</div>
				<div className="meal-cont">
					<h4>{strMeal}</h4>
					<Link to="/meal-details">
						Show Details
					</Link>
					<button onClick={() => handleAddToCart(props.meal)}>
						add to cart
					</button>
				</div>
		</div>
	);
};

export default Meal;
