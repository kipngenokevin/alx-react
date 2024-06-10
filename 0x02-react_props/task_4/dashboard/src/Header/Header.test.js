import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe(Header, () => {
  it('Header is displaying correctly', () => {
	render(<Header />);
    // screen.debug();
    const title = screen.getByText(/School dashboard/i);
    expect(title).toBeInTheDocument();
  });
});
