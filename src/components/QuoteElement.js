import { useState, useEffect } from 'react';
import getRandomQuote from './logic/getRandomQuote';

const QuoteElement = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote().then((quoteData) => setQuote(quoteData));
    return () => { setQuote({}); };
  }, []);

  return <em>{quote.content ? `"${quote.content}" —${quote.author}` : ''}</em>;
};

export default QuoteElement;
