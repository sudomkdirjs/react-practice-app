import React, { useCallback } from "react";
import "./App.css";
import useHover from "./components/hooks/useHover";
import useDidUpdate from "./components/hooks/useDidUpdate";
import useFetch from "./components/hooks/useFetch";
import usePreviousValue from "./components/hooks/usePreviousValue";
import Todos from "./components/Todos";
import GaugeMeter from './components/GaugeMeter';
import useThemeProvider from './components/hooks/useThemeProvider';
import ToggleButton from './components/ToggleButton';
import colors from './css/colors';
import CounterApp from './components/counter';
import TemperatureCalculator from './components/react-documentation/water-temperature/TemperatureCalculator';

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

  const { mode } = useThemeProvider();

  return (
    <div className="App" style={{backgroundColor: colors[mode].backgroundColor, color: colors[mode].contentColor}}>
      <h1
        ref={titleTargetElement}
        style={{ color: titleHover ? "green" : "black" }}
      >
        Hello React Hooks
      </h1>
      <h2 ref={infoTargetElement} style={{ color: infoHover ? "red" : "black" }}>
        Start editing to see some magic happen!
      </h2>
      <CounterApp />
      <button
        onClick={() => loadTask("https://jsonplaceholder.typicode.com/todos/1")}
      >
        Load Data
      </button>
      <TemperatureCalculator />
      <GaugeMeter label="Wind speed" units="meters per second" />
      <ToggleButton />
      <Todos />
    </div>
  );
}