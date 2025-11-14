import React from "react";
import Portal from "./Portal";
import Button from "./Button";
import { useGameSettings } from "../context/GameSettingsContext";

export default function GameFinishModal({ score, onRestart, onNext }) {
  const { settings } = useGameSettings();
  const { rounds } = settings;

  return (
    <Portal>
      <div className="modal-overlay">
        <div className="modal-window">
          <h2>Гру завершено 🎉</h2>
          <p>Твій результат: {score} з {rounds}</p>
          <p>{score >= rounds / 2 ? "Чудовий результат! 🏆" : "Спробуй ще раз! 💪"}</p>

          <div className="modal-actions">
            <Button text="Перейти до результатів 📊" onClick={onNext} />
            <Button text="Грати знову 🔁" type="secondary" onClick={onRestart} />
          </div>
        </div>
      </div>
    </Portal>
  );
}