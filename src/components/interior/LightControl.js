import React from 'react';
import Toggle from 'material-ui/Toggle';
import HomeDataFetcher from '../../utils/HomeDataFetcher';

const LightControl = () => (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
        <h3>Lighting</h3>
        <Toggle
            label="Dining Room"
            defaultToggled={true}
        />
        <Toggle
            label="Bedroom"
            defaultToggled={false}
        />
        <Toggle
            label="Kitchen"
            defaultToggled={false}
        />
    </div>
);

export default LightControl;