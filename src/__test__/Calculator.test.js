import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import Calculator from '../components/Calculator';

afterEach(() => cleanup());

it('calculator renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON;

  expect(tree).toMatchSnapshot();
});

it('an h2 should be displayed', () => {
  render(<Calculator />);

  expect(screen.getByRole('heading')).toHaveTextContent('Let\'s do some math!');
});

it('Clicking a button should update the display', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('2'));

  expect(screen.getByTestId('display')).toHaveTextContent('2');
});

it('Clicking a button should update the display', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByTestId('display')).toHaveTextContent('4');
});
