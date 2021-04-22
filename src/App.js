import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
	return (
		<div className="App">
			<div className="app__body">
				<Header />
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
