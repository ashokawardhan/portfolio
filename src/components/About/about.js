import React from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Content from './content';
import AboutImg from '../../images/about.jpg';

const About = () => (
    <div>
        <div style={{
            backgroundColor: '#E4DBBF',
            margin: 20
        }}
        >
            <Avatar
                src={AboutImg}
                className="about-image"
            />
        </div>
        <Divider style={{ marginLeft: 20, marginRight: 20 }} />
        <Paper style={{ margin: 20 }} zDepth={5}>
            <Card style={{ backgroundColor: '#F6F6F6' }}>
                <CardText style={{ fontSize: 30 }}>
                    <Content />
                </CardText>
            </Card>
        </Paper>
    </div>
);

export default About;
