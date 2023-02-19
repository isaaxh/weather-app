import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

function InputForm({ handleSearch }) {
  const inputValue = useRef(null);
  return (
    <div className='input-container'>
      <label>
        <input type='text' ref={inputValue} placeholder='Search City...' />

        <button onClick={() => handleSearch(inputValue)}>
          <SearchIcon />
        </button>
      </label>
    </div>
  );
}

export default InputForm;
