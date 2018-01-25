import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import WeatherDataFetcher from '../../utils/WeatherDataFetcher';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import { dataFetch } from '../actions/dataFetch';

class Weather extends Component {
    constructor (props) {
        super(props);

        this.temperatureUnitsHandler = this.temperatureUnitsHandler.bind(this)
    }

    componentDidMount() {
        this.props.dataFetch();
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
        const isLoading = this.props.isLoading;

        return (
            <Paper className="paperBlock paperBlock-100" zDepth={2}>
                <p>{this.state.city}</p>
                <div className="weatherWrapper">
                    {isLoading ? <p>Loading...</p> :             
                    <ul>
                        <li>
                            Temperature: {this.setTemperatureByUnits(this.state.temperature.value)} 
                            {this.state.temperature.units}
                        </li>
                        <li>Humidity: {this.state.humidity} %</li>
                        <li>Pressure: {this.state.pressure} mbar</li>
                    </ul>
                    }
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

const mapStateToProps = (state) => {
    return {
        items: state.content,
        hasErrors: state.hasErrors,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(dataFetch(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);