import { useContext } from "react";
import GameContext from "./game/GameContext";
import ScorePanel from "./components/ScorePanel";
import Welcome from "./components/Welcome";

function App() {

  return (
  <>
  <h1>Whack-a-Mole</h1>
  <>
  <ScorePanel/>
  <Welcome/>
  </>
  </>
  );
}

export default App;