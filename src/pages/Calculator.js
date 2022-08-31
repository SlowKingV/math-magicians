import CalculatorApp from '../components/CalculatorApp';

const Calculator = () => {
  console.log('Calculator page');
  return (
    <div>
      <div>
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div>
        <CalculatorApp />
      </div>
    </div>
  );
};

export default Calculator;
