import React from "react";

type ResultProps = {
  taxableIncome: number;
  estimatedTax: number;
  effectiveRate: number;
};

const ResultDisplay: React.FC<ResultProps> = ({ taxableIncome, estimatedTax, effectiveRate }) => {
  return (
    <div
       style={{ 
        marginTop: "1rem",
         padding: "1rem", 
         background: "#f9f9f9", 
         borderRadius: "8px" 
        }}
        >
      <p><strong>Taxable Income:</strong> ${taxableIncome.toFixed(2)}</p>
      <p><strong>Estimated Tax:</strong> ${estimatedTax.toFixed(2)}</p>
      <p><strong>Effective Tax Rate:</strong> {effectiveRate.toFixed(2)}%</p>
    </div>
  );
};

export default ResultDisplay;
