import React, { useState } from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

const Calculator = () => {
  const [TNO, setTNO] = useState({ total: null, next: null, operation: null });

  const handleClick = (evt) => {
    setTNO((prev) => (calculate(prev,
      evt.target.textContent)));
  };
  const { total, next, operation } = TNO;
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
    <section className="calculator-section">
      <div className="container-heading">
        <h2>Let&apos;s do some math!</h2>
      </div>
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
              <button type="button" className="button-orange" onClick={handleClick} key={values}>
                {values}
              </button>
            );
          }
          if (values === '0') {
            return (
              <button type="button" className="button-gray zero" onClick={handleClick} key={values}>
                {values}
              </button>
            );
          }
          return (
            <button type="button" className="button-gray" onClick={handleClick} key={values}>
              {values}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Calculator;
