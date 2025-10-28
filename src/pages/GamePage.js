import React from 'react';
import Button from '../components/Button';
import { useGameLogic } from '../hooks/useGameLogic';

export default function GamePage({ onFinish }) {
  const {
    round,
    score,
    scrambledWord,
    userInput,
    setUserInput,
    checkAnswer,
    isFinished,
  } = useGameLogic();

  if (isFinished) {
    onFinish(score);
  }

  return (
    <div className="page game-page">
      <h2>Раунд {round} з 5</h2>
      <p>Очки: {score}</p>
      <h3 className="scrambled">{scrambledWord}</h3>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Введи слово"
        className="input"
      />

      <div style={{ marginTop: '20px' }}>
        <Button text="Перевірити ✅" onClick={checkAnswer} />
        <Button text="Завершити гру ❌" type="secondary" onClick={() => onFinish(score)} />
      </div>
    </div>
  );
}
