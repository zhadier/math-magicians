import React from 'react';
import renderer from 'react-test-renderer';
import {
  cleanup,
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import App from '../App';

afterEach(() => cleanup());

it('App Renders Correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Clicking on Home link renders home', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Home'));
  expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
});

it('Clicking on Calculator link renders Calculator', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Calculator'));
  expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
});

it('Clicking on Calculator link renders Calculator', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Quote'));
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

it('Clicking on Calculator link does not render Home', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Calculator'));
  expect(screen.queryByText('Welcome to our page!')).toBeNull();
});
