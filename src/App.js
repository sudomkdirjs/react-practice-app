import React, { useCallback } from "react";
import "./App.css";
import useHover from "./components/hooks/useHover";
import useDidUpdate from "./components/hooks/useDidUpdate";
import useFetch from "./components/hooks/useFetch";
import usePreviousValue from "./components/hooks/usePreviousValue";
import Todos from "./components/Todos";
import GaugeMeter from './components/GaugeMeter';

export default function App() {
  
  const [titleHover, titleTargetElement] = useHover();
  const [infoHover, infoTargetElement] = useHover();

  useDidUpdate(
    // callback func will not be created every render when using useCallback Hook.
    useCallback(() => {
      console.log("Only Did Update lifecycle");
    }, [])
  );

  const [taskApiStatus, loadTask] = useFetch();

  const { data } = taskApiStatus;

  const previousData = usePreviousValue(data);

  console.log(previousData, data);

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
      <button
        onClick={() => loadTask("https://jsonplaceholder.typicode.com/todos/1")}
      >
        Load Data
      </button>
      <GaugeMeter label="Wind speed" units="meters per second" />
      {false && <Todos />}
    </div>
  );
}