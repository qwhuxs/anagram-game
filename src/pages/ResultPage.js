import React from "react";
import Button from "../components/Button";

export default function ResultPage({ score, onRestart }) {
  return (
    <div className="page result-page">
      <h2>🎉 Результати гри</h2>
      <p>
        Твій результат: <strong>{score}</strong> з 5
      </p>
      <Button text="Грати ще раз 🔁" onClick={onRestart} />
    </div>
  );
}
