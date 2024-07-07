import React from "react";
import ErrorMessage from "./ErrorMessage";

function UserInput({ labelText, handleInputChange, error }) {
  const labelTextSpaced = labelText.replace(/([A-Z])/g, " $1");

  return (
    <div className="input-group" id={`input-group-${labelText}`}>
      <label htmlFor={labelText}>{labelTextSpaced}</label>
      <input
        type="number"
        id={labelText}
        onChange={(e) => handleInputChange(e, labelText)}
        onBlur={(e) => handleInputChange(e, labelText)}
        className={error.error && labelText === "duration" ? "error-input" : ""}
      />
      {labelText === "duration" && error.error && <ErrorMessage />}
    </div>
  );
}

export default UserInput;
