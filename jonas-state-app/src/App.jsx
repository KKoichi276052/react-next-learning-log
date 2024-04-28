import { useState } from "react";
import "./App.css";

function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#fff" };
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <p className="message">Hello</p>

        <div className="buttons">
          <button style={btnStyle}>Previous</button>
          <button style={btnStyle}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
