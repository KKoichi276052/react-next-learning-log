import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#fff" };
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };
  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={btnStyle} onClick={previousStep}>
          Previous
        </button>
        <button style={btnStyle} onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
