import { useContext } from "react";
import GameContext from "../game/GameContext";

function Hole({ hasMole }) {
    const { hop } = useContext(GameContext);
    
    return (
        <>
        <li className={`hole ${hasMole ? "mole" : ""}`} onClick={hop} >

        </li>
        </>
    )
}

export default Hole;