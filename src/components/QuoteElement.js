import { useState, useEffect } from 'react';
import getRandomQuote from './logic/getRandomQuote';

const QuoteElement = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote().then((quoteData) => setQuote(quoteData));
    return () => { setQuote({}); };
  }, []);

  return (
    <>
      <em>
        &ldquo;
        {quote.content || ''}
        &rdquo;
      </em>
      <span>
        &mdash;
        {quote.author || ''}
      </span>
    </>
  );
};

export default QuoteElement;
