import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Frontend from './frontend';

const PaperContainer = (props) => (
    <Paper
        zDepth={2}
        style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
            backgroundColor: '#FFF'
        }}
    >
        {props.children}
    </Paper>
);

const Skills = () => (
    <section id="skills">
        <AppBar
            title="Skills"
            showMenuIconButton={false}
            zDepth={2}
            className="inside-bar"
        />
        <PaperContainer>
            <Frontend />
        </PaperContainer>
    </section>
);

export default Skills;
