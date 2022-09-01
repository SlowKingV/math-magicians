import './css/CalculatorApp.css';

import { useState } from 'react';
import CalcKey from './CalcKey';
import calculate from './logic/calculate';

const keys = [
  { className: 'allClear', label: 'AC', id: 1 },
  { className: 'plus-minus', label: '+/-', id: 2 },
  { className: 'percent', label: '%', id: 3 },
  {
    className: 'divide', label: '÷', colored: true, id: 4,
  },
  { className: 'seven', label: '7', id: 5 },
  { className: 'eigth', label: '8', id: 6 },
  { className: 'nine', label: '9', id: 7 },
  {
    className: 'multiply', label: 'x', colored: true, id: 8,
  },
  { className: 'four', label: '4', id: 9 },
  { className: 'five', label: '5', id: 10 },
  { className: 'six', label: '6', id: 11 },
  {
    className: 'minus', label: '-', colored: true, id: 12,
  },
  { className: 'one', label: '1', id: 13 },
  { className: 'two', label: '2', id: 14 },
  { className: 'three', label: '3', id: 15 },
  {
    className: 'plus', label: '+', colored: true, id: 16,
  },
  { className: 'zero', label: '0', id: 17 },
  { className: 'dot', label: '.', id: 18 },
  {
    className: 'equal', label: '=', colored: true, id: 19,
  },
];

let data = {
  total: null,
  next: null,
  operation: null,
};

const CalculatorApp = () => {
  const [{ display, prev, operation }, setDisplay] = useState({ display: '0', prev: null, operation: null });

  const handleKeyClick = (keyLabel) => {
    data = calculate(data, keyLabel);
    const { total, next, operation } = data;

    setDisplay({
      display: next || total || '0',
      prev: next ? total : null,
      operation,
    });
  };

  return (
    <div className="calculator">
      <div className="display noselect">
        <span className="prev">{prev}</span>
        <span>{operation}</span>
        <span>{display}</span>
      </div>
      {keys.map((key) => (
        <CalcKey
          key={key.id}
          keyClass={key.className}
          label={key.label}
          handleKeyClick={handleKeyClick}
          colored={key.colored}
        />
      ))}
    </div>
  );
};

export default CalculatorApp;
