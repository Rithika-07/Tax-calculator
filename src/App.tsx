import { useState } from 'react'
import './App.css'
import IncomeDeductionsInput from "./components/IncomeDeductionsInput.tsx";
import FilingStatusSelect from "./components/FilingStatusSelect.tsx";

function App() {
  const [income, setIncome] = useState<number>(0);
  const [deductions, setDeductions] = useState<number>(0);
  const [status, setStatus] = useState<string>("Indivudual");

  return (
  
      <div className ="input-container">
        <h1>Tax Calculator</h1>

        <form className="tax-form">
          <IncomeDeductionsInput
          income ={income}
          setIncome={setIncome}
          deductions={deductions}
          setDeductions={setDeductions}
          />

          <FilingStatusSelect status={status} setStatus={setStatus} />
          </form>
          </div>
  );
}
export default App;