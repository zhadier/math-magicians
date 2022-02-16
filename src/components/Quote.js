import { useEffect, useState } from 'react';
import './Quote.scss';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState('');
  useEffect(() => {
    setLoading(true);
    const getQuote = async () => {
      const connect = await fetch('https://random-math-quote-api.herokuapp.com/');
      const newQuote = await connect.json();
      setQuote(`${newQuote.quote} ~${newQuote.author}`);
      setLoading(false);
    };
    getQuote();
  }, [setQuote]);
  return (
    <section className="quote-section">
      <p>{loading ? 'Loading...' : quote }</p>
    </section>
  );
};

export default Quote;
