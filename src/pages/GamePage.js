import React from 'react';
import AnagramBox from '../components/AnagramBox';
import Button from '../components/Button';

export default function GamePage({ onFinish }) {
  return (
    <div className="page game-page">
      <h2>Розгадай анаграму 📝</h2>
      <AnagramBox scrambledWord="ЯЦЕНЦУ" />
      <Button text="Завершити гру" type="secondary" onClick={onFinish} />
    </div>
  );
}