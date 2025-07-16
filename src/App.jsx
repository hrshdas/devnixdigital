import './index.css';
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    document.title = "Devnix Digital";
  }, []);

  return (
    <div>
      <HomePage />
    
    </div>
  );
}

export default App;
