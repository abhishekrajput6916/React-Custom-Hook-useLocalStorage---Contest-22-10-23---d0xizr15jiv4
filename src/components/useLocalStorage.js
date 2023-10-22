import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
  const [lsValue, setLsValue] = useState(() => {
    if (value) {
      return JSON.parse(value);
    } else {
      localStorage.setItem(stateVar, JSON.stringify(value));
      return value;	
    }
  });
  function setLSState(val) {
    localStorage.setItem(stateVar, JSON.stringify(val));
    setLsValue(val);
  }
  return [lsValue, setLSState];
};

export default useLocalStorage;
