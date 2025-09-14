import { useContext } from "react";
import GameContext from "./game/GameContext";
import ScorePanel from "./components/ScorePanel";

function App() {

  return (
  <>
  <h1>Whack-a-Mole</h1>
  <>
  <ScorePanel/>
  </>
  </>
  );
}

export default App;