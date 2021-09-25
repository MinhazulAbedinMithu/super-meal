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
					<li><Link to="/" className="nav-link">Home</Link></li>
					<li><Link to="/about" className="nav-link">About</Link></li>
					<li><Link to="/shop" className="nav-link">Shop</Link></li>
					<li><Link to="/" className="nav-link">Orders</Link></li>
				</ul>
			</div>
		</nav>
  );
};

export default Navbar;