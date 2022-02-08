/** @format */
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
