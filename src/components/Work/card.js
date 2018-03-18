import React from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const openNewTab = (url) => {
    window.open(url, '_blank');
};

const style = {
    cardStyle: {
        marginTop: 40,
        marginBottom: 60,
        marginLeft: 200,
        marginRight: 200
    },
    cardHeaderStyle: {
        headerStyle: {
            backgroundColor: '#000'
        },
        titleStyle: {
            color: '#FFF',
            fontSize: 22
        },
        subtitleStyle: {
            color: '#FFF',
            fontSize: 16
        }
    }
};

const CardComponent = (props) => (
    <Paper zDepth={4} style={style.cardStyle}>
        <Card>
            <CardHeader
                title={props.title}
                subtitle={props.subtitle()}
                style={style.cardHeaderStyle.headerStyle}
                titleStyle={style.cardHeaderStyle.titleStyle}
                subtitleStyle={style.cardHeaderStyle.subtitleStyle}
            />
            <Divider />
            <CardText>
                {props.textComponent()}
            </CardText>
            <CardActions>
                {props.links.map((link) => (
                    <RaisedButton label={link.label} secondary onClick={() => openNewTab(link.url)} key={link.label} />
                ))}
            </CardActions>
        </Card>
    </Paper>
);

export default CardComponent;
