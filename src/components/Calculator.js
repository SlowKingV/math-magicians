import './css/Calculator.css';

import { Component } from 'react';
import CalcKey from './CalcKey';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleKeyClick = this.handleKeyClick.bind(this);
    this.data = {
      total: null,
      next: null,
      operation: null,
    };
    this.state = {
      display: '0',
      prev: null,
      operation: null,
    };
  }

  handleKeyClick(keyLabel) {
    this.data = calculate(this.data, keyLabel);

    const { total, next, operation } = this.data;
    this.setState({
      display: next || total || '0',
      prev: next ? total : null,
      operation,
    });
  }

  render() {
    const { display, prev, operation } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          <span className="prev">{prev}</span>
          <span>{operation}</span>
          <span>{display}</span>
        </div>
        <CalcKey keyClass="allClear" label="AC" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="plus-minus" label="+/-" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="percent" label="%" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="divide" label="÷" handleKeyClick={this.handleKeyClick} colored />
        <CalcKey keyClass="seven" label="7" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="eigth" label="8" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="nine" label="9" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="multiply" label="x" handleKeyClick={this.handleKeyClick} colored />
        <CalcKey keyClass="four" label="4" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="five" label="5" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="six" label="6" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="minus" label="-" handleKeyClick={this.handleKeyClick} colored />
        <CalcKey keyClass="one" label="1" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="two" label="2" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="three" label="3" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="plus" label="+" handleKeyClick={this.handleKeyClick} colored />
        <CalcKey keyClass="zero" label="0" handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="dot" label="." handleKeyClick={this.handleKeyClick} />
        <CalcKey keyClass="equal" label="=" handleKeyClick={this.handleKeyClick} colored />
      </div>
    );
  }
}

export default Calculator;
