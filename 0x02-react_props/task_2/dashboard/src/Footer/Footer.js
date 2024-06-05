import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils'
function Footer() {
	return(
		<div data-testid="footer" className="App-footer">
			<p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
		</div>
	);
}

export default Footer;