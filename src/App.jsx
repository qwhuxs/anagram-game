import React, { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import Header from './components/Header';

export default function App() {
  const [stage, setStage] = useState('start');
  const [finalScore, setFinalScore] = useState(0);

  const handleStart = () => setStage('game');
  const handleFinish = (score) => {
    setFinalScore(score);
    setStage('result');
  };
  const handleRestart = () => setStage('start');

  return (
    <div>
      <Header />
      {stage === 'start' && <StartPage onStart={handleStart} />}
      {stage === 'game' && <GamePage onFinish={handleFinish} />}
      {stage === 'result' && <ResultPage score={finalScore} onRestart={handleRestart} />}
    </div>
  );
}
