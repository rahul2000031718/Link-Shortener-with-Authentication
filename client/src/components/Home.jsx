import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

const Home = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [urls, setUrls] = useState([]);
  const [urlCount, setUrlCount] = useState(0);


  useEffect(() => {
    fetchUrls();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/urlSubmit', {
        longUrl: longUrl
      });
      setShortUrl(response.data.shortUrl);
      setError('');
      
      fetchUrls();
    } 
    catch (error) {
      setError(error.response.data.message);
      setShortUrl('');
    }
  };

  const fetchUrls = async () => {
    try {
      const response = await axios.get('http://localhost:3000/urls');
      setUrls(response.data.urls);
      setUrlCount(response.data.urls_count);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };




  return (
    <div className="container">

      <h1 className="center">URL Shortening Service</h1>
      <form onSubmit={handleSubmit} className="center">

        <label>Enter Long URL:</label>
        <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      {error && <p>Error: {error}</p>}
      {shortUrl && (
        <div className="result-container">

          <p>Short URL is : </p>
          <div className="short-url-box">{shortUrl}</div>
          <p></p>
        </div>
      )}



      <h2 className="center">List of URLs</h2>
      <div className="url-count-container">
        <p>Number of short urls generated are listed here: <span className="url-count">{urlCount}</span></p>
      </div>
      <ul className="url-list">
        {urls.map((url, index) => (
          <li key={index}>
            <strong>Long URL:</strong> {url.longUrl} <br />
           <strong>Short URL:</strong> {url.shortUrl}
          </li>
   ))}
      </ul>
    </div>
  );
};

export default Home;
