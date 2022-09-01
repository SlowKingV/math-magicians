import './css/Quote.css';
import QuoteElement from '../components/QuoteElement';

const Quote = () => {
  console.log('Quote page');
  return (
    <div className="quoteContainer">
      <QuoteElement />
    </div>
  );
};

export default Quote;
