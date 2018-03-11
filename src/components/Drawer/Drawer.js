import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const DrawerContainer = () => (
    <Drawer
        open
        docked
    >
        <Link to="/"><MenuItem>About Me</MenuItem></Link>
        <Link to="/work"><MenuItem>Work</MenuItem></Link>
        <Link to="/skills"><MenuItem>Skills</MenuItem></Link>
        <Link to="/projects"><MenuItem>Projects</MenuItem></Link>
        <Link to="/education"><MenuItem>Education</MenuItem></Link>
    </Drawer>
);

export default DrawerContainer;
