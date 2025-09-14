import { createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
    return <GameContext.Provider value={5}>{children}</GameContext.Provider>
}

export default GameContext;