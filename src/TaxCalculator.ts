export type FilingStatus = "Individual" | "SeniorCitizen" | "SuperSeniorCitizen";

export interface TaxResult {
  taxableIncome: number;
  tax: number;
}

const flatRates: Record<FilingStatus, number> = {
  Individual: 0.20,         
  SeniorCitizen: 0.15,       
  SuperSeniorCitizen: 0.10   
};

const exemptions: Record<FilingStatus, number> = {
  Individual: 250000,          
  SeniorCitizen: 300000,       
  SuperSeniorCitizen: 500000
};

export function calTax(
  income: number,
  deductions: number,
  status: FilingStatus,
): TaxResult {  
  const netIncome = Math.max(income - deductions, 0);
  const taxableIncome = Math.max(netIncome - exemptions[status], 0);
  const rate = flatRates[status];
  const tax = Math.round(taxableIncome * rate);
  return { taxableIncome, tax };
}
