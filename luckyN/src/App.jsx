// import Dice from "./Dice";
import LuckyN from "./LuckyN";
import { sum } from "./utils";
import "./App.css";

const lessThan4 = (dice) => {
  return sum(dice) < 4;
};

const allSameValue = (dice) => {
  return dice.every((v) => v === dice[0]);
};

function App() {
  return (
    <>
      <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={allSameValue} />
    </>
  );
}

export default App;
