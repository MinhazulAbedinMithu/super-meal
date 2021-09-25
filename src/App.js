import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Main from "./components/Main/Main";
import MealDetails from "./components/MealDetails/MealDetails";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";

export const CartContext = createContext();

function App() {
	const [mealsCart, setMealsCart] = useState([]);

	return (
		<CartContext.Provider value={[mealsCart, setMealsCart]}>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Main} />
					<Route path="/home" component={Main} />
					<Route path="/about" component={About} />
					<Route path="/orders" component={Orders} />
					<Route path="/meal-details" component={MealDetails} />
				</Switch>
			</Router>
		</CartContext.Provider>
	);
}

export default App;
