import { useState } from "react";
import Main from "./components/Main";
import Question from "./components/Question";

function App() {
  const [phase, setPhase] = useState(1);

  return (
    <div className="App">
      {phase === 1 && <Main setPhase={setPhase} />}
      {phase === 2 && <Question />}
      {phase === 3 && <div>3</div>}
    </div>
  );
}

export default App;
