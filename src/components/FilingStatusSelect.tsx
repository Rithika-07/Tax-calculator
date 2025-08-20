import { useState } from "react";

export const FilingStatusSelect= () => {
    const [status, setStatus] = useState<string>("Indivudual");

    return (
    <div className="form-group">
        <label>Filing Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Individual (<60 years)">Individual (below 60 years)</option>
            <option value="Senior Citizens (60-90 years)">Senior Citizens (60-90 years)</option>
            <option value="Super Senior Citizens (80+ years)">
            Super Senior Citizens (80+ years)
            </option>
        </select>
        </div>
    );
};
