import React from 'react';
import styled from 'styled-components';
import SectionContainer from 'src/components/commons/SectionContainer';
import Paper from 'material-ui/Paper';
import Frontend from './frontend';
import Backend from './backend';
import Build from './build';
import Database from './database';
import CSS from './css';
import Mobile from './mobile';

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

const Skills = () => (
    <SectionContainer id="skills" title="Skills">
        <PaperContainer>
            <Frontend />
        </PaperContainer>
        <PaperContainer>
            <CSS />
        </PaperContainer>
        <PaperContainer>
            <Backend />
        </PaperContainer>
        <PaperContainer>
            <Build />
        </PaperContainer>
        <PaperContainer>
            <Database />
        </PaperContainer>
        <PaperContainer>
            <Mobile />
        </PaperContainer>
    </SectionContainer>
);

export default Skills;
