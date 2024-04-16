import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Counter from "./Counter";
// import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
// import EmojiClicker from "./EmojiClicker";

function App() {
  return <ScoreKeeper numPlayers={4} target={5} />;
}

export default App;
