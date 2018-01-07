import React from 'react';
import Paper from 'material-ui/Paper';
import Weather from './exterior/Weather';
import Clock from './exterior/Clock';
import ControlPanel from './interior/ControlPanel';

const MainDashboard = () => (
  <div>    
    <Paper className="paperBlock paperBlock-50" zDepth={1}>
        <h1>Exterior data</h1>
        <Clock />
        <Weather />
    </Paper>
    <Paper className="paperBlock paperBlock-50" zDepth={1}>
        <h1>Internal data</h1>
        <ControlPanel />
    </Paper>
  </div>
);

export default MainDashboard;