import React from 'react';



const RandomQuote = () => {
  const [quotes, setQuotes] = React.useState([]);
  const [quoteIdx, setQuoteIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    fetch('/data/quotes.json')
      .then(res => res.json())
      .then(data => {
        setQuotes(data);
        setQuoteIdx(Math.floor(Math.random() * data.length));
      });
  }, []);

  function getRandomQuoteIdx(excludeIdx) {
    if (!quotes.length) return 0;
    let idx;
    do {
      idx = Math.floor(Math.random() * quotes.length);
    } while (idx === excludeIdx && quotes.length > 1);
    return idx;
  }

  const handleNewQuote = () => {
    setFade(false);
    setTimeout(() => {
      setQuoteIdx(getRandomQuoteIdx(quoteIdx));
      setFade(true);
    }, 250);
  };

  if (!quotes.length) return null;
  const quote = quotes[quoteIdx];

  return (
    <div style={{
      background: 'linear-gradient(90deg, #e0e7ff 0%, #f3f4f6 100%)',
      borderRadius: '12px',
      padding: '1.5rem',
      margin: '1.5rem 0',
      textAlign: 'center',
      boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
      maxWidth: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
      transition: 'box-shadow 0.2s',
      position: 'relative',
    }}>
      <div style={{
        fontSize: '2rem',
        color: '#6366f1',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.25s',
      }}>
        <span role="img" aria-label="lightbulb">💡</span>
        <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#22223b' }}>{quote.text}</span>
      </div>
      <div style={{
        fontWeight: 500,
        color: '#374151',
        marginBottom: '1rem',
        fontStyle: 'italic',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.25s',
      }}>
        — <span style={{ color: '#2563eb', fontWeight: 700 }}>{quote.author}</span>
      </div>
      <button onClick={handleNewQuote} style={{
        background: 'linear-gradient(90deg, #6366f1 0%, #2563eb 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        padding: '0.4rem 1.2rem',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(99,102,241,0.08)',
        transition: 'background 0.2s',
      }}>New Quote</button>
    </div>
  );
};

export default RandomQuote;
