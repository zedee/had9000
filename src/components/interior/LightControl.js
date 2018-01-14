import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import HomeDataFetcher from '../../utils/HomeDataFetcher';

class LightControl extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lightingData: []
        };
        
        this.lightingDataRender = this.lightingDataRender.bind(this);
        this.lightingDataHandler = this.lightingDataHandler.bind(this);
    }

    componentDidMount() {
        const lightingDataFetch = new HomeDataFetcher().loadData('offline');

        lightingDataFetch.then(data => {
            this.setState({
                lightingData: this.lightingDataRender(data)
            }); 
        });
    }

    lightingDataRender(lightingData) {   
        console.log('rendering....');     
        return lightingData.data.lighting.map((result, index) => {
            return (
                <Toggle
                    key={'lighting_' + index}
                    label={result.name}
                    defaultToggled={result.status ? true : false}
                    value={result.status ? true : false}
                    onToggle={(event, value) => this.lightingDataHandler(event, value)}
                />
            );
        });
    }

    lightingDataHandler(event, value) {        
        console.log(this);
        console.log(value);
        console.log('light ' + ' ' + ' has changed!');
    }

    render() {
        return (
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <h3>Lighting</h3>        
                {this.state.lightingData}
            </div>
        );
    }
};

export default LightControl;