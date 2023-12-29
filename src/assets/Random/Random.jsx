import React, { useState, useEffect } from 'react';
import { IoReloadSharp } from 'react-icons/io5';

const Random = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: 'I have never understood why one\'s affections must be confined, as once with women, to a single country.',
    author: 'John Kenneth Galbraith',
  });

  useEffect(() => {
    async function loadQuotes() {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    }

    loadQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote({
      text: selectedQuote?.text || 'No text available',
      author: selectedQuote?.author || 'Unknown',
    });
  };

  return (
    <div className="container">
      <h2 style={{ color: 'black',paddingBottom:'px' }}>Random Quote</h2>
      <hr></hr>
      <div className="quote">{quote.text}</div>
      <div className="author">- <b>{quote.author.split(',')[0]}</b></div>
      <div className="line"></div>
      <div className="bottom"></div>
      <div className="icons">
        <button className="btn" onClick={random}>Random</button>
      </div>
      <span style={{marginTop:'-3px',fontSize:'9px'}}><b>Developed By Roshan</b></span>
    </div>
  );
};

export default Random;
