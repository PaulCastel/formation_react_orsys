import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlexW from './FlexW';

describe('<FlexW />', () => {
  test('it should mount', () => {
    render(<FlexW />);
    
    const flexW = screen.getByTestId('FlexW');

    expect(flexW).toBeInTheDocument();
  });
});