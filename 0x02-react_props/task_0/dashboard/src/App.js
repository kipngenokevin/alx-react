import Header from './Header/Header';
import Footer from './Footer/Footer'
import Login from './Login/Login'
import { Notifications } from './Notifications'
import './App.css';

function App() {
  return (
	<div>
		<Notifications/>
		<div className="App">
			<Header/>
			<Login/>
			<Footer/>
		</div>
	</div>
  );
}

export default App;
