import { useEffect, useState } from 'react';
import './Quote.scss';

const Quote = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    const getQuote = async () => {
      const connect = await fetch('https://random-math-quote-api.herokuapp.com/');
      const newQuote = await connect.json();
      setQuote(`${newQuote.quote} ~${newQuote.author}`);
    };
    getQuote();
  }, [setQuote]);
  return (
    <section className="quote-section">
      <p>{quote}</p>
    </section>
  );
};

export default Quote;
