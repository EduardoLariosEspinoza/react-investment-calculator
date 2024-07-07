import { useState, useEffect } from "react";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { USER_INPUTS } from "./resources/constResources";
import investmentCalculator from "./assets/investment-calculator-logo.png";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 1,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const [resultData, setResultData] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const results = calculateInvestmentResults(userInputs);
    setResultData(results);
  }, [userInputs]);

  const handleChange = (event, labelText) => {
    setUserInputs({
      ...userInputs,
      [labelText]: Number(event.target.value),
    });

    if (event.target.value <= 0 && labelText === "duration") {
      setError({
        error: true,
        errorMessage: "Invalid Duration",
      });
    } else {
      setError({});
    }
  };

  return (
    <>
      <div id="header">
        <img src={investmentCalculator} alt="Investment Calculator" />
        <h1>React Investment Calculator</h1>
      </div>

      <div id="user-input">
        {USER_INPUTS.map((labelText, index) => {
          return (
            <UserInput
              key={index}
              labelText={labelText}
              handleInputChange={handleChange}
              error={error}
            />
          );
        })}
      </div>

      <Table result={resultData} />
    </>
  );
}

export default App;
