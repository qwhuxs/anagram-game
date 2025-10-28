import { useState, useEffect } from "react";

const words = ["ЯГНЯ", "ТЕЛЯ", "КОТЕНЯ", "ВЕДМЕДИК", "СЛОНЕНЯ"];

function shuffle(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

export function useGameLogic() {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");

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
    let newScore = score;
    if (userInput.toUpperCase() === currentWord) {
      newScore += 1;
      setScore(newScore);
    }

    if (round >= 5) {
      return { finished: true, score: newScore };
    } else {
      setRound(round + 1);
      startNewRound();
      return { finished: false };
    }
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
    setUserInput,
    checkAnswer,
    restartGame,
  };
}
