import { useState } from "react";
import Box from "./Box";

export default function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false, false]);
  };

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        return i === idx ? !value : value;
      });
    });
  };

  return (
    <>
      <div className="BoxGrid">
        {boxes.map((b, idx) => (
          <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />
        ))}
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
