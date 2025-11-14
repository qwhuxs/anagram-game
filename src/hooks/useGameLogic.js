import { useState, useEffect } from "react";
import { useGameSettings } from "../context/GameSettingsContext";

const easyWords = ["КОТ", "ДІМ", "РІКА", "СІЛЬ"];
const mediumWords = ["ЯГНЯ", "ТЕЛЯ", "СЛОВО", "МУЗИКА"];
const hardWords = ["ВЕДМЕДИК", "АЕРОПОРТ", "КОМПʼЮТЕР", "ТЕРИТОРІЯ"];

function shuffle(word) {
  return word.split("").sort(() => Math.random() - 0.5).join("");
}

export function useGameLogic() {
  const { settings } = useGameSettings();
  const { rounds, difficulty, timer } = settings;

  const words =
    difficulty === "easy"
      ? easyWords
      : difficulty === "medium"
      ? mediumWords
      : hardWords;

  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    startNewRound();
  }, []);

  useEffect(() => {
    if (timer === 0) return;
    if (timeLeft === 0) checkAnswer();

    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const startNewRound = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setScrambledWord(shuffle(randomWord));
    setUserInput("");
    setTimeLeft(timer);
  };

  const checkAnswer = () => {
    let newScore = score;

    if (userInput.toUpperCase() === currentWord) {
      newScore++;
      setScore(newScore);
    }

    if (round >= rounds) {
      return { finished: true, score: newScore, maxRounds: rounds };
    }

    setRound(round + 1);
    startNewRound();
    return { finished: false };
  };

  const restartGame = () => {
    setRound(1);
    setScore(0);
    startNewRound();
  };

  return {
    round,
    score,
    scrambledWord,
    userInput,
    timeLeft,
    setUserInput,
    checkAnswer,
    restartGame,
  };
}
