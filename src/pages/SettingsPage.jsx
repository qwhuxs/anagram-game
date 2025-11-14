import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { useGameSettings } from "../context/GameSettingsContext";

const schema = yup.object().shape({
  rounds: yup.number().min(3).max(20).required(),
  difficulty: yup.string().oneOf(["easy", "medium", "hard"]).required(),
  timer: yup.number().oneOf([0, 10, 20, 30]).required(),
});

export default function SettingsPage({ onStart }) {
  const { settings, setSettings } = useGameSettings();

  const { register, handleSubmit } = useForm({
    defaultValues: settings,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSettings(data);
    onStart();
  };

  return (
    <div className="page settings-page">
      <h2>⚙ Налаштування гри</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="settings-form">

        <label>Кількість раундів</label>
        <input type="number" {...register("rounds")} />

        <label>Рівень складності</label>
        <select {...register("difficulty")}>
          <option value="easy">Легкий</option>
          <option value="medium">Середній</option>
          <option value="hard">Складний</option>
        </select>

        <label>Таймер</label>
        <select {...register("timer")}>
          <option value={0}>Без таймера</option>
          <option value={10}>10 сек</option>
          <option value={20}>20 сек</option>
          <option value={30}>30 сек</option>
        </select>

        <Button text="Старт ▶️" />
      </form>
    </div>
  );
}
