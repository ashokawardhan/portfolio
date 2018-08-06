import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)`
    @media (min-width: 720px) {
        display: none !important;
    }
`;

const styles = {
    drawer: {
        width: 256
    }
};

@withStyles(styles)
class DrawerContainer extends Component {
    state = { width: 0, open: window.innerWidth >= 720 };

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
        const { classes } = this.props;
        const { open, width } = this.state;
        return (
            <Fragment>
                <StyledAppBar
                    position="sticky"
                    elevation={2}
                    onClick={this.openDrawer}
                >
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                        Ashoka Wardhan
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <Drawer
                    open={open}
                    variant={width >= 720 ? 'permanent' : 'temporary'}
                    onClose={() => this.setState({ open: false })}
                    classes={{
                        paper: classes.drawer
                    }}
                >
                    <Link to="/">
                        <MenuItem role="link">
                            About Me
                        </MenuItem>
                    </Link>
                    <Link to="/work">
                        <MenuItem role="link">
                            Work
                        </MenuItem>
                    </Link>
                    <Link to="/skills">
                        <MenuItem role="link">
                            Skills
                        </MenuItem>
                    </Link>
                    <Link to="/projects">
                        <MenuItem role="link">
                            Projects
                        </MenuItem>
                    </Link>
                    <Link to="/education">
                        <MenuItem role="link">
                            Education
                        </MenuItem>
                    </Link>
                </Drawer>
            </Fragment>
        );
    }
}

export default DrawerContainer;
