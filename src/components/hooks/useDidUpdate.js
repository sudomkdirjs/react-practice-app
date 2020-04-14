import { useRef, useEffect } from "react";

const useDidUpdate = cb => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      cb();
    }
    hasMounted.current = true;
  });
};

export default useDidUpdate;