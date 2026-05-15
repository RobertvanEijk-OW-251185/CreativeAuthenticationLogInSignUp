// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import pages
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
