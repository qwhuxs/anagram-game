import React from 'react';
import Button from '../components/Button';

export default function ResultPage({ onRestart }) {
  return (
    <div className="page result-page">
      <h2>🎉 Результати гри</h2>
      <p>Правильних відповідей: 0 (поки що заглушка)</p>
      <Button text="Грати ще раз 🔁" onClick={onRestart} />
    </div>
  );
}