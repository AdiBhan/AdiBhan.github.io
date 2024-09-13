import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import ScrollToTop from "./components/common/ScrollToTop";
import Assignments from "./pages/assignments";

import "./app.css";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about" element={<About />} />
					<Route path="/assignments" element={<Assignments />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Notfound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
