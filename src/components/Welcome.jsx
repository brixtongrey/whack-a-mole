import { useContext } from "react";
import GameContext from "../game/GameContext";

function Welcome() {

    const { start, highScore } = useContext(GameContext);

    return (
        <>
        <section className="welcome">
        <p>Welcome to Whack-A-Mole!</p>
        <p>Whack a mole to score points before time runs out</p>
        <button onClick={start}>Start Game</button>

            {highScore > 0 && <p className="high-score">High Score:{highScore}</p>}
     
        </section>
        </>
    );
}

export default Welcome;
