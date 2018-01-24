import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import WeatherDataFetcher from '../../utils/WeatherDataFetcher';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            temperature: {
                value: 0,
                units: 'K'
            },
            humidity: 0,
            pressure: 0,
            isLoadingData: false,
            hasLoadErrors: false
        }

        this.temperatureUnitsHandler = this.temperatureUnitsHandler.bind(this)
    }

    componentDidMount() {
        const weatherData = new WeatherDataFetcher().loadData('local');

        weatherData.then(data => {
            console.log(data);

            this.setState({
                temperature: {
                    value: this.setTemperatureByUnits(data.main.temp),
                    units: this.state.temperature.units
                },
                humidity: data.main.humidity,
                pressure: data.main.pressure
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate(prevProps, prevState) {
    }

    setTemperatureByUnits(temperature) {
        if (typeof temperature === 'number') {
            switch (this.state.temperature.units) {
                case 'C':
                    return Math.round(temperature - 274.0);
                case 'K':
                    return temperature;
                default:
                    return temperature;
            }   
        }
        else return '--';
    }

    temperatureUnitsHandler(ev, value) {
        this.setState({
            temperature: {
                units: value,
                value: this.state.temperature.value
            }
        })
    }

    render() {
        return (
            <Paper className="paperBlock paperBlock-100" zDepth={2}>
                <p>{this.state.city}</p>
                <div className="weatherWrapper">
                    <ul>
                        <li>Temperature: {this.setTemperatureByUnits(this.state.temperature.value)} {this.state.temperature.units}</li>
                        <li>Humidity: {this.state.humidity} %</li>
                        <li>Pressure: {this.state.pressure} mbar</li>
                    </ul>
                </div>
                <div>
                    <RadioButtonGroup 
                        name="tempSelector" 
                        defaultSelected="K"
                        onChange={this.temperatureUnitsHandler}
                        >
                        <RadioButton
                            value="C"
                            label="Celsius"
                            disabled={false}                         
                        />
                        <RadioButton
                            value="K"
                            label="Kelvin"
                            disabled={false}
                        />
                    </RadioButtonGroup>
                </div>
            </Paper>
        )
    }
}

export default Weather;