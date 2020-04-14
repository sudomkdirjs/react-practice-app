import { useEffect, useRef } from "react";

const usePreviousValue = value => {
  const previousValue = useRef(value);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return previousValue.current;
};

export default usePreviousValue;