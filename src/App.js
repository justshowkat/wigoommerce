import "./App.css";
import MainContnet from "./Components/MainContent/MainContnet";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="app-container">
			<div className="app">
				<Navbar />
				<MainContnet />
			</div>
		</div>
	);
}

export default App;
