import { createContext } from "react";

const NUM_HOLES = 9;
const TIME_LIMIT = 10;

const GameContext = createContext();

export function GameProvider({ children }) {
    return <GameContext.Provider value={5}>{children}</GameContext.Provider>
}

export default GameContext;