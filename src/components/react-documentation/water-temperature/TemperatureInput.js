import React from 'react';

const Units = {
    c: "Celsius",
    f: "Fahrenheit"
}

function TemperatureInput(props) {

    let { temperature, unit, handleTemperatureChange } = props;
    return (
        <div>
            <legend>Enter the Temperature in {Units[unit]}</legend>
            <input value={temperature} onChange={(event) => handleTemperatureChange(event.target.value, unit)}/>
        </div>
    )
}

export default TemperatureInput;