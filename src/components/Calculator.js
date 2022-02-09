import React from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(evt) {
    this.setState((state) => calculate(state, evt.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    const keys = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
    return (
      <div className="container-calculator">
        <div className="display">
          {total || ''}
          {operation || ''}
          {next || ''}
        </div>
        {keys.map((values) => {
          if (
            values === '+'
            || values === '-'
            || values === '='
            || values === 'x'
            || values === '÷'
          ) {
            return (
              <button
                type="button"
                className="button-orange"
                onClick={this.handleClick}
                key={values}
              >
                {values}
              </button>
            );
          }
          if (values === '0') {
            return (
              <button
                type="button"
                className="button-gray zero"
                onClick={this.handleClick}
                key={values}
              >
                {values}
              </button>
            );
          }
          return (
            <button type="button" className="button-gray" onClick={this.handleClick} key={values}>
              {values}
            </button>
          );
        })}
      </div>
    );
  }
}

/* <button type="button" className="button-gray" onClick={this.handleClick}>
AC
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
+/-
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
%
</button>
<button type="button" className="button-orange" onClick={this.handleClick}>
÷
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
7
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
8
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
9
</button>
<button type="button" className="button-orange" onClick={this.handleClick}>
x
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
4
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
5
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
6
</button>
<button type="button" className="button-orange" onClick={this.handleClick}>
-
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
1
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
2
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
3
</button>
<button type="button" className="button-orange" onClick={this.handleClick}>
+
</button>
<button type="button" className="button-gray zero" onClick={this.handleClick}>
0
</button>
<button type="button" className="button-gray" onClick={this.handleClick}>
.
</button>
<button type="button" className="button-orange" onClick={this.handleClick}>
=
</button> */
