import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component without crashing', () => {
	render(<Footer />);
	// No assertions needed here, successful render implies no crashing
  });
  
test('renders text "Copyright"', () => {
	const { getByText } = render(<Footer />);
	expect(getByText('Copyright', {exact: false})).toBeInTheDocument();
});
  