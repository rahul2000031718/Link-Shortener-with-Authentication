/*
import React, { useState } from 'react';

function URLShortener() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Enter long URL" required />
        <button type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default URLShortener;*/
