import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Frontend from './frontend';

const StyledPaper = styled(Paper)`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: #FFF;
`;

const PaperContainer = (props) => (
    <StyledPaper
        zDepth={2}
    >
        {props.children}
    </StyledPaper>
);

const StyledAppBar = styled(AppBar)`
    @media (max-width: 720px) {
        display: none !important;
    }
`;

const Skills = () => (
    <section id="skills">
        <StyledAppBar
            title="Skills"
            showMenuIconButton={false}
            zDepth={2}
        />
        <PaperContainer>
            <Frontend />
        </PaperContainer>
    </section>
);

export default Skills;
