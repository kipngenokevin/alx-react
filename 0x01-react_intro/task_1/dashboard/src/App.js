import logo from './logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
	<div>
    <div className="App-header">
		<img src={logo} alt="Holberton Logo"></img>
		<h1>School dashboard</h1>
	</div>,
	<div className="App-body">
		<p>Login to access the full dashboard</p>
		<label htmlFor="email">Email</label>
		<input type="text" id="email" name="email"></input>
		<label htmlFor="password">Password</label>
		<input type="password" id="password" name="password"></input>
		<button>OK</button>
	</div>,
	<div className="App-footer">
		<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
	</div>
	</div>
  );
}

export default App;
