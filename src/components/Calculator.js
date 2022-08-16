import './css/Calculator.css';

import React from 'react';
import PropTypes from 'prop-types';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="display"><span>{result}</span></div>
        <CalcKey keyClass="allClear" label="AC" />
        <CalcKey keyClass="memoryRecall" label="+/-" />
        <CalcKey keyClass="percent" label="%" />
        <CalcKey keyClass="divide" label="&divide;" colored />
        <CalcKey keyClass="seven" label="7" />
        <CalcKey keyClass="eigth" label="8" />
        <CalcKey keyClass="nine" label="9" />
        <CalcKey keyClass="multiply" label="x" colored />
        <CalcKey keyClass="four" label="4" />
        <CalcKey keyClass="five" label="5" />
        <CalcKey keyClass="six" label="6" />
        <CalcKey keyClass="minus" label="-" colored />
        <CalcKey keyClass="one" label="1" />
        <CalcKey keyClass="two" label="2" />
        <CalcKey keyClass="three" label="3" />
        <CalcKey keyClass="plus" label="+" colored />
        <CalcKey keyClass="zero" label="0" />
        <CalcKey keyClass="dot" label="." />
        <CalcKey keyClass="equal" label="=" colored />
      </div>
    );
  }
}

function CalcKey({ keyClass, label, colored }) {
  const colorClass = colored ? ' colored' : '';
  return <button className={`key ${keyClass}${colorClass}`} type="button">{label}</button>;
}

CalcKey.propTypes = {
  keyClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  colored: PropTypes.bool,
};
CalcKey.defaultProps = { colored: false };
