import './index.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import PerformanceMarketingPage from './pages/PerformanceMarketingPage';
import CreativeDesignPage from './pages/CreativeDesignPage';
import UIUXDesignPage from './pages/UIUXDesignPage';
import SocialMediaPage from './pages/SocialMediaPage';
import ClientDetailPage from './pages/ClientDetailPage';

function App() {
  useEffect(() => {
    document.title = "Devnix Digital";
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
          <Route path="/services/creative-design" element={<CreativeDesignPage />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/client/:clientId" element={<ClientDetailPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
