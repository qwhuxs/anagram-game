import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';

function App() {
  const [page, setPage] = useState('start');

  const renderPage = () => {
    switch (page) {
      case 'start':
        return <StartPage onStart={() => setPage('game')} />;
      case 'game':
        return <GamePage onFinish={() => setPage('result')} />;
      case 'result':
        return <ResultPage onRestart={() => setPage('start')} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Header />
      {renderPage()}
    </div>
  );
}

export default App;
