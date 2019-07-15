import {useState, useEffect} from "react";

/**
 * Custom debounce function
 * 
 * @param {*} value 
 * @param {int} delay 
 */
export const UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};
