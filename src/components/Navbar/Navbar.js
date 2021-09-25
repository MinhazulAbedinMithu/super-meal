import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
			<div className="container nav">
				<div className="logo">
					<h1>Super Meal</h1>
				</div>
				<div className={`menu ${isNavOpen && "change-icon"}`} onClick={() => setIsNavOpen(!isNavOpen)}>
					<div id="bar-1" className="bar"></div>
					<div id="bar-2" className="bar"></div>
					<div id="bar-3" className="bar"></div>
				</div>
				<ul className="nav-ul">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/">Orders</Link>
				</ul>
			</div>
		</nav>
  );
};

export default Navbar;