import React from "react";
import ContentArea from "../ContentArea/ContentArea";
import Sidebar from "../Sidebar/Sidebar";
import "./MainContent.css";

const MainContnet = () => {
	return (
		<div className="main-content">
			<Sidebar />
			<ContentArea />
		</div>
	);
};

export default MainContnet;
