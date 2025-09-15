import { useContext } from "react";
import GameContext from "./game/GameContext";
import ScorePanel from "./components/ScorePanel";
import Welcome from "./components/Welcome";
import HoleField from "./components/HoleField"

function App() {

  const{playing} = useContext(GameContext);

  return (
  <>
  <h1>Whack-a-Mole</h1>
  {playing ? (
      <>
  <ScorePanel/>
  <HoleField/>
  </>
  ) : (
  <Welcome/>
  )}
  </>
  );
}

export default App;