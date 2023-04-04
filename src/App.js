import './App.css';
import Navbar from './component/Navbar';

function App() {
	return (
		<>
			<Navbar/>
			<section className="scMain">
				<div className="scTextWrapper">
					<h1 className="scHead"> Order </h1>
					<p className="scText"> Place your order, pay and relax while we bring your food. </p>
				</div>
			</section>
		</>
	);
}

export default App;
