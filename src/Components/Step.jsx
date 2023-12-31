import { useState } from "react";
import "./Step.css";
import Button from "./Button/Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const stepUp = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  const stepDown = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };

  const handleClose = () => setIsOpen((close) => !close);

  return (
    <>
      <div>
        <button className="close" onClick={handleClose}>
          {isOpen ? "✕" : "⯈"}
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
              <Button onClick={stepDown} bgColor="#7950f2" textColor="#fff">
                <span>👈</span>
                <span>Previous</span>
              </Button>
              <Button onClick={stepUp} bgColor="#7950f2" textColor="#fff">
                <span>Next</span>
                <span>👉</span>
              </Button>
              {/* <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={stepDown}
              >
                Previous
              </button> */}
              {/* <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={stepUp}
              > 
                Next
              </button>*/}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
