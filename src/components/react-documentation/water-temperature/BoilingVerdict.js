import React from 'react';

function BoilingVerdict(props) {
    let temperature = parseFloat(props.temperature)
    if (!isNaN(temperature) && temperature >= 100) {
        return <p style={{color: 'red'}}>Water would boil.</p>;
    }
    return <p>Water will not boil</p>;
}

export default BoilingVerdict;