import { shallow } from 'enzyme'; // Assuming you're using enzyme
import Footer from './Footer';

test('renders Footer component without crashing', () => {
  shallow(<Footer />);
  // No assertions needed here, successful render implies no crashing
});

test('renders text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.contains('Copyright')).toBe(true);
});

