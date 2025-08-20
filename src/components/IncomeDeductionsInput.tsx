import React from 'react';

type Props = {
    income : number;
    setIncome: React.Dispatch<React.SetStateAction<number>>;
    deductions:number;
    setDeductions: React.Dispatch<React.SetStateAction<number>>;
};

const IncomeDeductionsInput: React.FC<Props>=({
    income,
    setIncome,
    deductions,
    setDeductions,

}) => {
   return (
    <div className="form-group">
          <label>Income:</label>
        <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        placeholder='Enter your income'/>

         <label>Deductions:</label>
      <input
        type="number"
        value={deductions}
        onChange={(e) => setDeductions(Number(e.target.value))}
        placeholder="Enter your deductions"
      />

    </div>
   )
};
export default IncomeDeductionsInput;