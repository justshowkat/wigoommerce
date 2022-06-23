import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [isHamDropActive, setHamDrop] = useState(false);
	const navItems = (
		<>
			<a href="#">Products</a>
			<a href="#">Story</a>
			<a href="#">Manufacturing</a>
			<a href="#">Packaging</a>
		</>
	);
	const NavIcons = (
		<>
			<a href="#">
				<img src="images/icons/basket.png" alt="" srcset="" />
			</a>
			<a href="#">
				<img src="images/icons/person.png" alt="" srcset="" />
			</a>
		</>
	);
	const searchBar = (
		<div className="navbar-search">
			<img src="images/icons/search.png" alt="" />
			<input
				className="navbar-search-input"
				placeholder="Search Here"
				type="text"
			/>
		</div>
	);
	return (
		<div className="navbar-container">
			<div className="logo-container">
				<img src="images/logo.png" alt="" srcset="" />
			</div>
			<div className="navbar-search-container">{searchBar}</div>
			<div className="hamburger-container">
				<div
					className={
						isHamDropActive ? "hamburger close-hamburger" : "hamburger"
					}
					onClick={() => setHamDrop(!isHamDropActive)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div
					className={
						isHamDropActive
							? "hamburger-drop-down hamburger-dropdown-active"
							: "hamburger-drop-down"
					}
				>
					{searchBar}
					{navItems}
					<div className="hamburger-drop-icons">{NavIcons}</div>
				</div>
			</div>
			<div className="nav-items">
				{navItems}
				{NavIcons}
			</div>
		</div>
	);
};

export default Navbar;
