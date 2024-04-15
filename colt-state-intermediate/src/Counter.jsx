import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
  const addThree = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
