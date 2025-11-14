import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import GameFinishModal from "../components/GameFinishModal";
import { useGameLogic } from "../hooks/useGameLogic";

export default function GamePage({ onFinish }) {
  const {
    round,
    score,
    scrambledWord,
    userInput,
    timeLeft,
    gameFinished,
    setUserInput,
    checkAnswer,
    restartGame,
    maxRounds
  } = useGameLogic();

  const [showModal, setShowModal] = useState(false);
  const isLastRound = round >= maxRounds;

  const handleCheck = () => {
    const result = checkAnswer();
    if (result.finished) {
      setShowModal(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  const handleFinishGame = () => {
    onFinish(score);
  };

  useEffect(() => {
    if (gameFinished) {
      setShowModal(true);
    }
  }, [gameFinished]);

  const handleRestart = () => {
    restartGame();
    setShowModal(false);
  };

  const handleNextRound = () => {
    setShowModal(false);
    onFinish(score);
  };

  return (
    <div className="page game-page">
      <h2>Раунд {round} з {maxRounds}</h2>
      <p>Очки: {score}</p>
      {timeLeft > 0 && (
        <p className="timer">⏳ {timeLeft} сек</p>
      )}
      <h3 className="scrambled">{scrambledWord}</h3>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Вгадай тварину"
        className="input"
        autoFocus
      />
      
      <div className="game-buttons">
        <Button text="Перевірити" onClick={handleCheck} />
        
        {/* Кнопка завершення гри з'являється на останньому раунді */}
        {isLastRound && (
          <Button 
            text="Завершити гру 🏁" 
            type="secondary" 
            onClick={handleFinishGame} 
          />
        )}
      </div>
      
      {showModal && (
        <GameFinishModal
          score={score}
          maxRounds={maxRounds}
          onRestart={handleRestart}
          onNext={handleNextRound}
        />
      )}
    </div>
  );
}