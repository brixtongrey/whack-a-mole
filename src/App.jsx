import { useContext } from "react";
import GameContext from "./game/GameContext";

function App() {

  const num = useContext(GameContext)
  console.log("num-->", num);

  return (
  <>
  <h1>App</h1>
  </>
  );
}

export default App;