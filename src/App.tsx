import "./App.scss";
import { Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
