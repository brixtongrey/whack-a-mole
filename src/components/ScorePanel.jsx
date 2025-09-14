import { useContext } from "react";
import GameContext from "../game/GameContext";

function ScorePanel() {

    const { score, time } = useContext(GameContext);

    return (
       <>
       <div className="scoreboard">
        <div className="chip">
            Score <strong>{score}</strong>
        </div>
        <div className="chip">
            Time <strong>{time}</strong>
        </div>
        <button className="btn btn-secondary">Restart</button>
       </div>
       </> 
    );
}

export default ScorePanel;
