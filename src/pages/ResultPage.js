import React from "react";
import Button from "../components/Button";
import { useGameSettings } from "../context/GameSettingsContext";

export default function ResultPage({ score, onRestart }) {
  const { settings } = useGameSettings();
  const { rounds } = settings;

  return (
    <div className="page result-page">
      <h2>🎉 Результати гри</h2>
      <p>
        Твій результат: <strong>{score}</strong> з {rounds}
      </p>
      <Button text="Грати ще раз 🔁" onClick={onRestart} />
    </div>
  );
}