// src/UrlShortenerForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './UrlShortenerForm.css';

// This is the original form logic from the previous App.js
const API_BASE_URL = 'https://url-shortner-backend-pxu3.onrender.com';

function UrlShortenerForm() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setShortUrl('');
    if (!originalUrl) {
      setError('Please enter a URL to shorten.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/shorten`, {
        original_url: originalUrl,
      });
      const shortenedLink = `${API_BASE_URL}/${response.data.short_code}`;
      setShortUrl(shortenedLink);
      setSuccess('URL shortened successfully!');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="url-form-container">
      <div className="url-form-title">URL Shortener</div>
      <form onSubmit={handleSubmit} className="url-form" autoComplete="off">
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          autoFocus
          aria-label="Enter a long URL to shorten"
        />
        <button type="submit" disabled={loading} aria-label="Shorten URL">
          {loading ? <span className="loader" aria-label="Loading"></span> : 'Shorten'}
        </button>
      </form>
      {error && <p className="error" role="alert">{error}</p>}
      {success && <p className="success" role="status">{success}</p>}
      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6em' }}>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button
              className="copy-btn"
              onClick={handleCopy}
              title="Copy to clipboard"
              type="button"
              aria-label="Copy shortened URL"
            >
              {copied ? '✅' : '📋'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UrlShortenerForm;