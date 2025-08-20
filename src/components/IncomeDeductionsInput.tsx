import { useState } from 'react';

export const IncomeDeductionsInput=() => {
    const [income, setIncome] = useState<string>("");
    const [deductions, setDeductions] = useState<string>("");

    return (
    <div className="form-group">
        <label>Income:</label>
        <input
        type="number"
        value={income}
        onChange={(e) => setIncome((e.target.value))}
        placeholder='Enter your income'/>
      <label>Deductions:</label>
      <input
        type="number"
        value={deductions}
        onChange={(e) => setDeductions((e.target.value))}
        placeholder="Enter your deductions"
      />
    </div>
   )
};
