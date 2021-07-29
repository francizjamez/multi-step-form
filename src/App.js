import { useState } from "react";

const steps = [`Choose title`, `Choose description`, `Confirm data`];

const buttonClass =
  "py-1 px-2 mr-4 mt-4 border-2 border-black rounded-lg bg-purple-300 font-semibold";
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answered, setAnswered] = useState([0, 0, 0]);

  const changeStep = (num) => {
    if (answered[num]) {
      setCurrentStep(num);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setAnswered((prev) => {
      const newAnswered = [...prev];
      newAnswered[currentStep] = 1;
      return newAnswered;
    });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setAnswered((prev) => {
      const newAnswered = [...prev];
      newAnswered[currentStep] = 0;
      return newAnswered;
    });
  };
  return (
    <div className="h-screen grid place-items-center bg-purple-700">
      <form className="flex gap-8 container bg-white p-4 rounded max-w-lg">
        <div className="flex flex-col justify-end">
          {steps.map((el, i) => (
            <button
              onClick={() => changeStep(i)}
              type="button"
              className="text-left my-1 flex gap-3 items-center min-w-max"
            >
              <span
                className={`rounded-full p-1 w-8 h-8 text-center  ${
                  answered[i] ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                {i}
              </span>
              <span>{el}</span>
            </button>
          ))}
        </div>
        <div className="grid place-items-center">
          <div className={currentStep !== 0 && `hidden`}>
            <p>Choose title</p>
            <button
              type="button"
              className={`${buttonClass}`}
              onClick={nextStep}
            >
              CONFIRM
            </button>
          </div>
          <div className={currentStep !== 1 && `hidden`}>
            <p>Choose description</p>
            <button
              type="button"
              className={`${buttonClass}`}
              onClick={prevStep}
            >
              BACK
            </button>
            <button
              type="button"
              className={`${buttonClass}`}
              onClick={nextStep}
            >
              CONFIRM
            </button>
          </div>
          <div className={currentStep !== 2 && `hidden`}>
            <p>Confirm data</p>
            <button
              type="button"
              className={`${buttonClass}`}
              onClick={prevStep}
            >
              BACK
            </button>
            <button
              type="button"
              className={`${buttonClass}`}
              onClick={nextStep}
            >
              CONFIRM
            </button>
          </div>

          <div className={currentStep !== 3 && `hidden`}>
            Were done thanks for sending us your data
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
