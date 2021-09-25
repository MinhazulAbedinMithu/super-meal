import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Shop.css";

const Shop = () => {
	const [meals, setMeals] = useState([]);
	const [searchName, setSearchName] = useState("");
  console.log(searchName);

	const handleSearch = () => {};

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
        .then(response => response.json())
        .then(data => setMeals(data.meals));
},[searchName]);
// console.log(meals.length);

	// const url = `www.themealdb.com/api/json/v1/1/search.php?f=e`;
	// fetch(url)
	// 	.then((response) => response.json())
	// 	.then((data) => console.log(data));

	return (
		<div className="shop">
			<div className="search">
				<button onClick={handleSearch()}>Search</button>
				<input
					type="text"
					name="mealName"
					id="mealName"
					onChange={(e) => {
						setSearchName(e.target.value);
					}}
				/>
			</div>
      <div className="meals">
        {
          meals?.map((meal) => <Meal key={meal.idMeal} meal={meal}/>)
        }
      </div>
		</div>
	);
};

export default Shop;
