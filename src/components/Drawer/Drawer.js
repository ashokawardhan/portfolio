import React, { Component, Fragment } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

class DrawerContainer extends Component {
    state = { width: 0, open: true };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const windowWidth = window.innerWidth;
        this.setState({
            width: windowWidth,
            open: windowWidth >= 720
        });
    }

    openDrawer = () => {
        this.setState({
            open: true
        });
    }

    render() {
        return (
            <Fragment>
                <AppBar
                    title="Ashoka Wardhan"
                    className="app-drawer"
                    onClick={this.openDrawer}
                />
                <Drawer
                    open={this.state.open}
                    docked={this.state.width >= 720}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <Link to="/"><MenuItem>About Me</MenuItem></Link>
                    <Link to="/work"><MenuItem>Work</MenuItem></Link>
                    <Link to="/skills"><MenuItem>Skills</MenuItem></Link>
                    <Link to="/projects"><MenuItem>Projects</MenuItem></Link>
                    <Link to="/education"><MenuItem>Education</MenuItem></Link>
                </Drawer>
            </Fragment>
        );
    }
}

export default DrawerContainer;
