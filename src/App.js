// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import UrlShortenerForm from './UrlShortenerForm';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage'; // Import LoginPage
import './App.css';

// A wrapper for protected routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    // If no token, redirect to login page
    return <Navigate to="/login" />;
  }
  return children;
};

// A new component for the navigation bar to use the navigate hook
const Navigation = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      {token && <button onClick={handleLogout} className="logout-btn">Logout</button>}
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<UrlShortenerForm />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;