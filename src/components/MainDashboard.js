import React from 'react';
import Paper from 'material-ui/Paper';
import Weather from './exterior/Weather';
import Clock from './exterior/Clock';

const MainDashboard = () => (
  <div>
    <Paper className="MainDashboard-50-block" zDepth={1}>
        <Weather />
        <Clock />
    </Paper>
    <Paper className="MainDashboard-50-block" zDepth={1} />
  </div>
);

export default MainDashboard;