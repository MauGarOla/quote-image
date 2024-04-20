import React from 'react'

export default function QuoteImage() {

  const [quote, setQuote] = React.useState(null);
  const [image, setImage] = React.useState(0);
  const [newQuote, setNewQuote] = React.useState(true)


  React.useEffect(() => {
    const fetchQuote = () => {
      fetch('https://stoic-quotes.com/api/quote')
        .then(res => res.json())
        .then(data => setQuote(data))
        .catch(error => console.error('Error fetching quote:', error));
    };

    fetchQuote();
  }, [newQuote])

  function changeQuote() {
    setNewQuote(prevQuote => !prevQuote)
  }

  function changeImage() {
    setImage(prevImage => prevImage + 1)
  }

  return (
    <main>
      <div className='buttons'>
        <button onClick={changeQuote} className='btn'>Change Quote</button>
        <button onClick={changeImage} className='btn'>Change Image</button>
      </div>
      <div className='quote-image'>
        <img className='image' src={`https://picsum.photos/800/500?grayscale&random=${image}`} alt="Landscape" />
        {quote ? (
          <div className='quote'>
            <p className='text'>{quote.text}</p>
            <p className='author'>- {quote.author}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  )
}
