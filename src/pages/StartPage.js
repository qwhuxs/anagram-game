import React from 'react';
import Button from '../components/Button';

export default function StartPage({ onStart }) {
  return (
    <div className="page start-page">
      <h2>Почнемо гру?</h2>
      <p>Натисни кнопку, щоб розпочати анаграми!</p>
      <Button text="Старт ▶️" onClick={onStart} />
    </div>
  );
}