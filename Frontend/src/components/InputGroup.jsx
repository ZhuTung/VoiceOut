import React from "react";
import "../styles/components/InputGroup.css";

const InputGroup = ({ label, name, value, placeholder, onChange, type, errorMsg }) => {
  return (
    <div className="mt-3 mb-3">
      <div className="w-100">
        <label>{label}</label>
      </div>

      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="input"
      ></input>
      <p className="error">{errorMsg}</p>
    </div>
  );
};

export default InputGroup;
