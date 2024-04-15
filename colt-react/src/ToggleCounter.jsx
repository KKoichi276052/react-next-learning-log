import { useState } from "react";
export default function TogglerCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const changeNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p className="Toggler" onClick={toggleIsHappy}>
        {isHappy ? "😆" : "😭"}
      </p>
      <p onClick={changeNum}>{count}</p>
    </>
  );
}
