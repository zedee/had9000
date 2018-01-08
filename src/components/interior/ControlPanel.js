import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InternalTempPanel from './InternalTempPanel';
import LightControl from './LightControl';

class ControlPanel extends Component {
    render() {
        return (
            <div className="flexDisplay">
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <h3>Ambient</h3>
                    <InternalTempPanel />
                </Paper>
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <LightControl />
                </Paper>            
                <Paper className="paperBlock paperBlock-50" zDepth={1}>
                    <h3>Presence</h3>
                    <p>No presence has been detected</p>
                </Paper>
                <Paper className="paperBlock paperBlock-50" zDepth={1}>                
                    <Card>
                        <CardHeader 
                            style={{paddingRight: 0}}
                            title="Dogie Cam"
                            subtitle="Your dog has food"
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