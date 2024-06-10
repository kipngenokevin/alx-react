import Header from './Header/Header';
import Footer from './Footer/Footer'
import Login from './Login/Login'
import { Notifications } from './Notifications/Notifications'
import './App.css';

function App() {
  return (
	<div>
		<Notifications/>
		<div className="App">
			<Header/>
			<div className='App-body'>
				<Login />
			</div>
			<div className='App-footer'>
				<Footer/>
			</div>	
		</div>
	</div>
  );
}

export default App;
