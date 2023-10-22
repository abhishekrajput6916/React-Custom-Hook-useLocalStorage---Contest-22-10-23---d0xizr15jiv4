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
  function setLSState(valorfn) {
    let newVal;
    if (typeof valorfn === "function") {
      const fn = valorfn;
      newVal = fn(lsValue);
    } else {
      newVal = valorfn;
    }
    localStorage.setItem(key, JSON.stringify(newVal));
    setLsValue(newVal);
  }
  return [lsValue, setLsValue];
};

export default useLocalStorage;
