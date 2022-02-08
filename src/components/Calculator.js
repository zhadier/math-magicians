import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-calculator">
        <div className="display">0</div>
        <button type="button" className="button-gray">AC</button>
        <button type="button" className="button-gray">+/-</button>
        <button type="button" className="button-gray">%</button>
        <button type="button" className="button-orange">+</button>
        <button type="button" className="button-gray">7</button>
        <button type="button" className="button-gray">8</button>
        <button type="button" className="button-gray">9</button>
        <button type="button" className="button-orange">X</button>
        <button type="button" className="button-gray">4</button>
        <button type="button" className="button-gray">5</button>
        <button type="button" className="button-gray">6</button>
        <button type="button" className="button-orange">-</button>
        <button type="button" className="button-gray">1</button>
        <button type="button" className="button-gray">2</button>
        <button type="button" className="button-gray">3</button>
        <button type="button" className="button-orange">+</button>
        <button type="button" className="button-gray zero">0</button>
        <button type="button" className="button-gray">.</button>
        <button type="button" className="button-orange">=</button>
      </div>
    );
  }
}
