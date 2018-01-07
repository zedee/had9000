import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ControlPanel extends Component {
    render() {
        return (
            <div>
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <h3>Ambient</h3>
                    <p>Temperature: </p>
                </Paper>
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <h3>Lighting</h3>
                    <p>Dining Room: </p>
                    <p>Bedroom: </p>
                    <p>Kitchen: </p>
                </Paper>            
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <h3>Presence</h3>
                    <p>No presence has been detected</p>
                </Paper>
                <Paper className="paperBlock paperBlock-50" zDepth={1}>                
                    <Card>
                    <CardHeader
                        title="Dogie Cam"
                        subtitle="Your dog has plenty of food"
                    />
                    <CardMedia>
                    <video src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" alt="" />
                    </CardMedia>
                </Card>
                </Paper>                
            </div>
        );
    }
}

export default ControlPanel;