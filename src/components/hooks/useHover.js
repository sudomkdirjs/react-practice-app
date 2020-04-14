import { useRef, useEffect, useState } from "react";

const useHover = () => {
  const targetElement = useRef(null);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    targetElement.current.onmouseenter = () => setHover(true);
    targetElement.current.onmouseleave = () => setHover(false);
  });

  return [hover, targetElement];
};

export default useHover;