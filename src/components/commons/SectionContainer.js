import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
    @media (max-width: 720px) {
        display: none !important;
    }
`;

const SectionContainer = ({ id, title, children }) => (
    <section id={id}>
        <StyledAppBar
            elevation={2}
            color="primary"
            position="sticky"
        >
            <Toolbar>
                <Typography variant="title" color="inherit">
                    {title}
                </Typography>
            </Toolbar>
        </StyledAppBar>
        {children}
    </section>
);

export default SectionContainer;
