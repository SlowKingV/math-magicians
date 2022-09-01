import './css/Calculator.css';
import CalculatorApp from '../components/CalculatorApp';

const Calculator = () => {
  console.log('Calculator page');
  return (
    <div className="calcComponent">
      <div className="left">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="right">
        <CalculatorApp />
      </div>
    </div>
  );
};

export default Calculator;
