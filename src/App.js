import React from "react";
import "./App.css";
import useHover from "./components/hooks/useHover";

export default function App() {
  const [infoHover, infoTargetElement] = useHover();
  const [titleHover, titleTargetElement] = useHover();

  return (
    <div className="App">
      <h1
        ref={titleTargetElement}
        style={{ color: titleHover ? "green" : "black" }}
      >
        Hello React Hooks
      </h1>
      <h2 ref={infoTargetElement} style={{ color: infoHover ? "red" : "black" }}>
        Start editing to see some magic happen!
      </h2>
    </div>
  );
}