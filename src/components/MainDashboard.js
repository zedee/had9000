import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Weather from './exterior/Weather';
import Clock from './exterior/Clock';
import PizzaBot from './interior/PizzaBot';
import ControlPanel from './interior/ControlPanel';

const MainDashboard = () => (
  <div className="flexDisplay">    
    <Paper className="paperBlock paperBlock-50" zDepth={1}>
        <h1>Exterior data</h1>
        <Clock />
        <Weather />
        <h1>Remote Pizza orderer</h1>
        <Paper className="paperBlock paperBlock-100">
            <PizzaBot />
            <TextField
                hintText="Say hi to Pizza Bot to start ordering your pizza"
                style={{width: '100%'}}
            />
        </Paper>
    </Paper>
    <Paper className="paperBlock paperBlock-50" zDepth={1}>
        <h1>Your Home</h1>
        <ControlPanel />
    </Paper>
  </div>
);

export default MainDashboard;