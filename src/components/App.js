import React, { useRef, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [state, setState] = useLocalStorage("key", null);
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    console.log("hii");
    setState(text);
  };

  return (
    <div id="main">
      <label>Enter a Value to save in localStorage</label>
      <input type="text" id="value" ref={inputRef} />
      <button id="set" onClick={submitHandler}>
        Set Value
      </button>
    </div>
  );
};

export default App;
