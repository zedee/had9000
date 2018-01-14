import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const PizzaBot = () => (
    <List>        
        <ListItem
            leftAvatar={<Avatar src="https://robohash.org/localhost.png" />}
            primaryText={
                <p>Pizza Bot</p>
            }
            secondaryText={
                <p>Hi, can you haz pizza?</p>
            }
            secondaryTextLines={1}
        >
        </ListItem>
        <TextField
                hintText="Say hi to Pizza Bot to start ordering your pizza"
                style={{width: '100%'}}
        />
    </List>
);

export default PizzaBot;