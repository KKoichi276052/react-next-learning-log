import { useState } from "react";

function generateGameBoard() {
  console.log("gsngorg");
  return Array(5000);
}
export default function Dumbo() {
  // this will execute every time when setBoard is clicked
  // const [board, setBoard] = useState(generateGameBoard());
  // initializer function. but this will be executed only once
  const [board, setBoard] = useState(generateGameBoard);

  return (
    <button onClick={() => setBoard("hello")}>click me to change state</button>
  );
}
