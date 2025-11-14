import React from "react";
import Portal from "./Portal";
import Button from "./Button";

export default function GameFinishModal({ score, maxRounds, onRestart, onNext }) {
  return (
    <Portal>
      <div className="modal-overlay">
        <div className="modal-window">
          <h2>Гру завершено 🎉</h2>
          <p>Твій результат: {score} / {maxRounds}</p>

          <div className="modal-actions">
            <Button text="Новий тур 🔁" onClick={onNext} />
            <Button text="Почати заново ⏮" type="secondary" onClick={onRestart} />
          </div>
        </div>
      </div>
    </Portal>
  );
}
