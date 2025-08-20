import { useState } from "react";
import ResultDisplay from "./ResultDisplay";

function App() {
  const [taxableIncome, setTaxableIncome] = useState(0);
  const [estimatedTax, setEstimatedTax] = useState(0);
  const [effectiveRate, setEffectiveRate] = useState(0);

  return (
    <div>
      {/* Inputs for income and deductions will go here */}

      <ResultDisplay
        taxableIncome={taxableIncome}
        estimatedTax={estimatedTax}
        effectiveRate={effectiveRate}
      />
    </div>
  );
}

export default App;

