import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RequestsPage from './pages/RequestsPage';
import ForumPage from './pages/ForumPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/forum" element={<ForumPage />} />
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
