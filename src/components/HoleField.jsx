import { useContext } from "react";
import GameContext from "../game/GameContext";
import Hole from "./Hole"

 /*
    HoleField - List render/ grid
    Read the holes context
    Take the holes and then display them in 3x3 field
    Items that we map to <Hole/> boolean to each cell
    */


function HoleField() {

    const { holes } = useContext(GameContext);

    return (
        <>
        <ul className="field">
        {holes.map((hasMole, index) => (
            <Hole key={index} hasMole={hasMole}/>
        ))}
        </ul>
        </>
    )
}

export default HoleField;