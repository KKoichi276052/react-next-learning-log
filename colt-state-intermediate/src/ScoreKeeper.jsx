import { useState } from "react";

export default function ScoreKeeper({ numPlayers, target }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  // function increaseScore(i) {
  //   return setScores((oldScores) => {
  //     const copy = [...oldScores];
  //     copy[i] += 1;
  //     return copy;
  //   });
  // }

  const increaseScore = (idx) => {
    setScores((oldScores) => {
      return oldScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  // function increaseP2Score() {
  //   setScores((oldScores) => {
  //     return { ...oldScores, p2Score: oldScores.p2Score + 1 };
  //   });
  // }

  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };

  return (
    <div>
      <h1>orgnaeo</h1>
      <ul>
        {scores.map((score, i) => {
          return (
            <li key={i}>
              Player {i + 1} : {score}
              <button onClick={() => increaseScore(i)}>+1</button>
              {score >= target && <span>WINNER!</span>}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
