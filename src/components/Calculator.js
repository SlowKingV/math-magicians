import './css/Calculator.css';

import { useState } from 'react';
import CalcKey from './CalcKey';
import calculate from './logic/calculate';

let data = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
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
      <div className="display">
        <span className="prev">{prev}</span>
        <span>{operation}</span>
        <span>{display}</span>
      </div>
      <CalcKey keyClass="allClear" label="AC" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="plus-minus" label="+/-" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="percent" label="%" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="divide" label="÷" handleKeyClick={handleKeyClick} colored />
      <CalcKey keyClass="seven" label="7" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="eigth" label="8" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="nine" label="9" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="multiply" label="x" handleKeyClick={handleKeyClick} colored />
      <CalcKey keyClass="four" label="4" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="five" label="5" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="six" label="6" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="minus" label="-" handleKeyClick={handleKeyClick} colored />
      <CalcKey keyClass="one" label="1" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="two" label="2" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="three" label="3" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="plus" label="+" handleKeyClick={handleKeyClick} colored />
      <CalcKey keyClass="zero" label="0" handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="dot" label="." handleKeyClick={handleKeyClick} />
      <CalcKey keyClass="equal" label="=" handleKeyClick={handleKeyClick} colored />
    </div>
  );
};

export default Calculator;
