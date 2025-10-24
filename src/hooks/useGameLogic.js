import { useState, useEffect } from "react";

const words = ["ЯГНЯ", "ТЕЛЯ", "КОТЕНЯ", "ВЕДМЕДИК", "СЛОНЕНЯ"];

function shuffle(word) {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

export function useGameLogic() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setScrambledWord(shuffle(randomWord));
    setUserInput("");
  };

  const checkAnswer = () => {
    if (userInput.toUpperCase() === currentWord) {
      setScore((prev) => prev + 1);
    }

    if (round === 5) {
      setIsFinished(true);
    } else {
      setRound((prev) => prev + 1);
      startNewRound();
    }
  };

  const restartGame = () => {
    setRound(1);
    setScore(0);
    setIsFinished(false);
    startNewRound();
  };

  return {
    round,
    score,
    currentWord,
    scrambledWord,
    userInput,
    setUserInput,
    isFinished,
    checkAnswer,
    restartGame,
  };
}
