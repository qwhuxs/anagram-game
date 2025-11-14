import React, { useState } from "react";
import Button from "../components/Button";
import GameFinishModal from "../components/GameFinishModal";
import { useGameLogic } from "../hooks/useGameLogic";

export default function GamePage() {
  const {
    round,
    score,
    scrambledWord,
    userInput,
    timeLeft,
    setUserInput,
    checkAnswer,
    restartGame,
  } = useGameLogic();

  const [finishedData, setFinishedData] = useState(null);

  const handleCheck = () => {
    const result = checkAnswer();
    if (result.finished) setFinishedData(result);
  };

  return (
    <div className="page game-page">
      <h2>Раунд {round}</h2>
      <p>Очки: {score}</p>

      {timeLeft !== null && timeLeft > 0 && <p>⏳ {timeLeft} сек</p>}

      <h3 className="scrambled">{scrambledWord}</h3>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Введи слово"
        className="input"
      />

      <Button text="Перевірити" onClick={handleCheck} />

      {finishedData && (
        <GameFinishModal
          score={finishedData.score}
          maxRounds={finishedData.maxRounds}
          onRestart={restartGame}
          onNext={() => window.location.reload()}
        />
      )}
    </div>
  );
}
