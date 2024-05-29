import Header from './Header/Header';
import Footer from './Footer/Footer'
import './App.css';

function App() {
  return (
	<div>
		<Header/>
		<div className="App-body">
			<p>Login to access the full dashboard</p>
		</div>
		<Footer/>
	</div>
  );
}

export default App;
