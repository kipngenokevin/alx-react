import logo from '../logo.jpeg';
import './Header.css'

export default function Header() {
	return (
		<div className="App-header">
			<img src={logo} alt="Holberton Logo"></img>
			<h1>School dashboard</h1>
		</div>
	);
}