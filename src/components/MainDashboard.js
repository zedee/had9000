import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Weather from './exterior/Weather';
import Clock from './exterior/Clock';
import ControlPanel from './interior/ControlPanel';

const MainDashboard = () => (
  <div className="flexDisplay">    
    <Paper className="paperBlock paperBlock-50" zDepth={1}>
        <h1>Exterior data</h1>
        <Clock />
        <Weather />
        <h1>Remote Pizza orderer</h1>
        <Paper className="paperBlock paperBlock-100">
        <div>
            <List>
                <ListItem
                    leftAvatar={<Avatar src="https://robohash.org/localhost.png" />}
                    primaryText={
                        <p>Pizza Bot</p>
                    }
                    secondaryText={
                        <p>Hi, can you haz pizza?"</p>
                    }
                    secondaryTextLines={1}
                >
                </ListItem>
            </List>
        </div>
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