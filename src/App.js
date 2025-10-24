import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import { useGameLogic } from './hooks/useGameLogic';

function App() {
  const [page, setPage] = useState('start');
  const [finalScore, setFinalScore] = useState(0);

  const {
    round,
    score,
    scrambledWord,
    userInput,
    setUserInput,
    checkAnswer,
    isFinished,
    restartGame,
  } = useGameLogic();

  // Виклик handleFinish лише через useEffect
  useEffect(() => {
    if (isFinished) {
      setFinalScore(score);
      setPage('result');
    }
  }, [isFinished, score]);

  const handleStart = () => setPage('game');

  const handleRestart = () => {
    restartGame();
    setPage('start');
  };

  const renderPage = () => {
    switch (page) {
      case 'start':
        return <StartPage onStart={handleStart} />;
      case 'game':
        return (
          <GamePage
            round={round}
            score={score}
            scrambledWord={scrambledWord}
            userInput={userInput}
            setUserInput={setUserInput}
            checkAnswer={checkAnswer}
          />
        );
      case 'result':
        return <ResultPage score={finalScore} onRestart={handleRestart} />;
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
