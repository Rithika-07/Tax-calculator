import { useState } from "react";

export const FilingStatusSelect= () => {
    const [status, setStatus] = useState<string>("Indivudual");

    return (
    <div className="form-group">
        <label>Filing Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Individual">Individual (below 60 years)</option>
            <option value="SeniorCitizen">Senior Citizens (60-90 years)</option>
            <option value="SuperSeniorCitizen">Super Senior Citizens (80+ years)</option>
        </select>
        </div>
    );
};
