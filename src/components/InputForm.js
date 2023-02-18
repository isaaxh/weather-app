import React, { useRef } from "react";

function InputForm({ handleSearch }) {
  const inputValue = useRef(null);
  return (
    <div>
      <input type='text' ref={inputValue} />
      <button onClick={() => handleSearch(inputValue)}>Search</button>
    </div>
  );
}

export default InputForm;
