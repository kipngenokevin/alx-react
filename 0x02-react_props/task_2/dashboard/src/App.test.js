import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test("this test should check if Login renders well", () => {
	render(<App />);
})
