import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'cli':
        return (
          <div className="cli-redirect">
            <h1>Opening CLI Terminal...</h1>
            <p>Redirecting to standalone terminal interface</p>
            <meta http-equiv="refresh" content="2;url=/terminal.html" />
            <a href="/terminal.html" className="cli-link">
              Click here if not redirected automatically
            </a>
          </div>
        );
      default:
        return (
          <div className="home-content">
            <h1>Welcome to Arnav's Coding Portfolio</h1>
            <p>Explore my skills, projects, and interests through our interactive CLI terminal!</p>
            <a href="/terminal.html" className="cli-button">
              Launch CLI Terminal
            </a>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
