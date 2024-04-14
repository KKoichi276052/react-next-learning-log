import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  console.log(useState(true));
  console.log(isHappy);
  console.log(setIsHappy);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  return (
    <p className="Toggler" onClick={toggleIsHappy}>
      {isHappy ? "😆" : "😭"}
    </p>
  );
}
