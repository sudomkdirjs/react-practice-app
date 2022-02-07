
import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class TemperatureCalculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            unit: 'c'
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
        this.convertToFahrenheit = this.convertToFahrenheit.bind(this);
        this.convertToCelsius = this.convertToCelsius.bind(this);
        this.tryConvert = this.tryConvert.bind(this);
    }

    handleTemperatureChange(temperature, unit) {
        this.setState({temperature, unit})
    }

    convertToFahrenheit(temperature) {
        return (temperature * 9/5) + 32;
    }

    convertToCelsius(temperature) {
        return (temperature - 32) * 5/9;
    }

    tryConvert(temperature, convertFunc) {
        let _temperature = parseFloat(temperature);
        if (isNaN(_temperature)) {
            return '';
        }

        let converted = convertFunc(_temperature);
        let rounded = Math.round(converted * 1000) / 1000;

        return rounded;
    }

    render() {
        let { temperature, unit } = this.state;
        let celsius = unit === 'f' ? this.tryConvert(temperature, this.convertToCelsius) : temperature;
        let fahrenheit = unit === 'c' ? this.tryConvert(temperature, this.convertToFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput 
                    temperature={celsius}
                    unit={'c'}
                    handleTemperatureChange={this.handleTemperatureChange}/>
                <TemperatureInput 
                    temperature={fahrenheit}
                    unit={'f'}
                    handleTemperatureChange={this.handleTemperatureChange}/>
                <BoilingVerdict temperature={temperature}/>
            </div>
        );
    }
}

export default TemperatureCalculator;