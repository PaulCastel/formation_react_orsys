import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexH from './FlexH';

describe('<FlexH />', () => {
  test('it should mount', () => {
    render(<FlexH />);
    
    const flexH = screen.getByTestId('FlexH');

    expect(flexH).toBeInTheDocument();
  });
});