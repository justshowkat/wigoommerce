import React from "react";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
	const [isOpen, setStatus] = useState(false);
	const navList = [
		{
			img: "images/icons/new-in.png",
			title: "New In",
		},
		{
			img: "images/icons/clothing.png",
			title: "Clothing",
		},
		{
			img: "images/icons/shoes.png",
			title: "Shoes",
		},
		{
			img: "images/icons/activewear.png",
			title: "Activewear",
		},
		{
			img: "images/icons/gifts.png",
			title: "Gifts and Living",
		},
		{
			img: "images/icons/inspiration.png",
			title: "Inspiration",
		},
	];

	const sideNavItem = (
		<>
			{navList.map(({ img, title }) => (
				<a href="#" className="explore-nav-item">
					<img src={img} alt="" className="x-nav-item-icon" />
					<p>{title} </p>
				</a>
			))}
		</>
	);

	const sideNavHelp = (
		<>
			<img
				src="images/icons/chat.png"
				className="help-center-icon"
				alt="help center"
			/>
			<p>Help Center</p>
		</>
	);
	return (
		<div className="sidebar-section">
			<div className={isOpen ? "hlg-sidebar-sm sidebar-sm" : "sidebar-sm"}>
				<button className="side-sm-button" onClick={() => setStatus(!isOpen)}>
					Explore
				</button>
				<div
					className={
						isOpen ? "sidebar-sm-items" : "sidebar-sm-items sidebar-sm-closed"
					}
				>
					{sideNavItem}
				</div>
			</div>
			<div className="sidebar-container">
				<div className="sidebar-upper">
					<div className="explore-container">
						<h3 className="explore-heading">Explore</h3>
						{sideNavItem}
					</div>
				</div>
				<div className="help-center">{sideNavHelp}</div>
			</div>
		</div>
	);
};

export default Sidebar;
