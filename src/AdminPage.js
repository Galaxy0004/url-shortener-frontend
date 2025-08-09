// src/AdminPage.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './AdminPage.css';

const API_BASE_URL = 'https://url-shortner-backend-pxu3.onrender.com';

function AdminPage() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // We use useCallback to memoize the fetchUrls function
  // so it isn't recreated on every render.
  const fetchUrls = useCallback(async () => {
    setLoading(true); // Show loading indicator on manual refresh
    setError(''); // Clear previous errors

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('Authorization token not found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
      const response = await axios.get(`${API_BASE_URL}/api/urls`, config);
      setUrls(response.data);
    } catch (err) {
      setError('Failed to fetch data. Your session may be invalid.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []); // No dependencies, so the function is created once

  // Fetch the data when the component first mounts
  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]); // The effect depends on the fetchUrls function

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin - All URLs</h1>
        <button onClick={fetchUrls} className="refresh-btn">
          Refresh List
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.short_code}>
              <td className="original-url-cell">
                <a href={url.original_url} target="_blank" rel="noopener noreferrer">
                  {url.original_url}
                </a>
              </td>
              <td>
                <a href={`${API_BASE_URL}/${url.short_code}`} target="_blank" rel="noopener noreferrer">
                  {`${API_BASE_URL}/${url.short_code}`}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
