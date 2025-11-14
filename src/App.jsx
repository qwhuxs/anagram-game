import React, { useState } from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import SettingsPage from "./pages/SettingsPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import Header from "./components/Header";
import { GameSettingsProvider } from "./context/GameSettingsContext";

export default function App() {
  const [stage, setStage] = useState("start");
  const [finalScore, setFinalScore] = useState(0);

  const handleGameFinish = (score) => {
    console.log("Game finished with score:", score);
    setFinalScore(score);
    setStage("result");
  };

  return (
    <GameSettingsProvider>
      <Header />
      {stage === "start" && <StartPage onStart={() => setStage("settings")} />}
      {stage === "settings" && <SettingsPage onStart={() => setStage("game")} />}
      {stage === "game" && (
        <GamePage onFinish={handleGameFinish} />
      )}
      {stage === "result" && (
        <ResultPage score={finalScore} onRestart={() => setStage("start")} />
      )}
    </GameSettingsProvider>
  );
}