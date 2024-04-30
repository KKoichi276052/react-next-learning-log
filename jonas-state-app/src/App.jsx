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
  const [isOpen, setIsOpen] = useState(true);

  const nextStep = () => {
    if (step < 3) setStep((s) => s + 1);
  };
  const previousStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
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
      )}
    </>
  );
}

export default App;
