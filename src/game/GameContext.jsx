import { createContext, useEffect, useState, useRef } from "react";

const NUM_HOLES = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [holes, setHoles] = useState();
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME_LIMIT);
  const [playing, setPlaying] = useState(false);
  const timer = useRef();

  // keeps track of the game time, it ends the round by calling stop
  useEffect(() => {
    if (time <= 0 && playing) {
      //stop
    }
  }, [time, [playing]]);

  const start = () => {
    setScore(0);
    setPlaying(true);
    timer.current = setInterval(
      () => setTime((prevTime) => prevTime - 1),
      1000
    );
  };

  // stops the game, set playing back to false
  const stop = () => {
    setPlaying(false);
    clearInterval(timer.current);
    setTime(TIME_LIMIT);
  };

  return <GameContext.Provider value={5}>{children}</GameContext.Provider>;
}

export default GameContext;
