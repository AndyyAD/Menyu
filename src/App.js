import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import Register from './pages/Register'

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="navItem">
					<div className="nav-container navWrap">
						<ul className="nav-items">
							<li className="nav-item1"> <Link to="/"> Home </Link> </li>
							<li className="nav-item2"> <Link to="/"> QR Scan </Link> </li>
							<li className="nav-item3"> <Link to="/about"> About Us </Link> </li>
							<li className="nav-item4"> <Link to="/register"> Register </Link> </li>
						</ul>
						<a href="/"> <h1 className="logo"> Menyu </h1> </a>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
