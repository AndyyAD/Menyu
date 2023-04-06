import './App.css';
import Navbar from './component/Navbar';
import Arrow from './img/down arrow.svg'
import Search from './img/search.svg'
import Chicken from './img/chicken.png'

function App() {
	return (
		<>
			<Navbar/>
			<section className="scMain">
				<div className="scTextWrapper">
					<h1 className="scHead"> Order </h1>
					<p className="scText"> Place your order, pay and relax while we bring your food. </p>
				</div>
				<img src={Arrow} alt="" className="downArrow"/>
			</section>
			<section className="search">
				<div className="searchWrap nav-container">
					<div className="scLeft">
						<h1 className="searchHead"> Search your restaurant </h1>
						<p className="searchText"> Just search and select. It’s that simple. </p>
						<div className="searchBox">
							<input type="text"/>
							<img src={Search} alt="" />
						</div>
					</div>
					<img src={Chicken} alt="" className="chickenImg"/>
				</div>
			</section>
		</>
	);
}

export default App;
