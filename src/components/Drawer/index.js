import React, { Component } from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
    @media (min-width: 720px) {
        display: none !important;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 22px;
    border-bottom: 1px solid #d4d5d9;
    margin: 0 16px;
`;

const StyledMenuItem = styled(MenuItem)`
    font-size: 1.24rem !important;
    color: #575ba1 !important;
    padding: 16px 0;
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
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        const windowWidth = window.innerWidth;
        this.setState({
            width: windowWidth,
            open: windowWidth >= 720
        });
    };

    openDrawer = () => {
        this.setState({
            open: true
        });
    };

    render() {
        const { classes } = this.props;
        const { open, width } = this.state;
        return (
            <>
                <StyledAppBar
                    position="sticky"
                    elevation={2}
                    onClick={this.openDrawer}
                >
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" color="inherit">
                            Ashoka Wardhan
                        </Typography>
                    </Toolbar>
                </StyledAppBar>
                <Drawer
                    open={open}
                    variant={width >= 720 ? "permanent" : "temporary"}
                    onClose={() => this.setState({ open: false })}
                    classes={{
                        paper: classes.drawer
                    }}
                >
                    <StyledLink to="/">
                        <StyledMenuItem role="link">About Me</StyledMenuItem>
                    </StyledLink>
                    <StyledLink to="/work">
                        <StyledMenuItem role="link">Work</StyledMenuItem>
                    </StyledLink>
                    <StyledLink to="/skills">
                        <StyledMenuItem role="link">Skills</StyledMenuItem>
                    </StyledLink>
                    <StyledLink to="/projects">
                        <StyledMenuItem role="link">Projects</StyledMenuItem>
                    </StyledLink>
                    <StyledLink to="/education">
                        <StyledMenuItem role="link">Education</StyledMenuItem>
                    </StyledLink>
                </Drawer>
            </>
        );
    }
}

export default DrawerContainer;
