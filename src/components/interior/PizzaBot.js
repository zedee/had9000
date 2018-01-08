import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

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
    </List>
);

export default PizzaBot;