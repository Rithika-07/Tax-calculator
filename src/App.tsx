import './App.css'
import {FilingStatusSelect} from "./components/FilingStatusSelect.tsx";
import { IncomeDeductionsInput } from './components/IncomeDeductionsInput.tsx';


function App() {
  return (
      <div className ="input-container">
        <h1>Tax Calculator</h1>
        <form className="tax-form">
          <IncomeDeductionsInput/>
          <FilingStatusSelect />
        </form>
        </div>
  );
}
export default App;