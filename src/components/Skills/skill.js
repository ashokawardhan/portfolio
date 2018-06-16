import React from 'react';
import styled from 'styled-components';
import SectionContainer from 'src/components/commons/SectionContainer';
import Paper from '@material-ui/core/Paper';
import Frontend from 'src/components/Skills/frontend';
import Backend from 'src/components/Skills/backend';
import Build from 'src/components/Skills/build';
import Database from 'src/components/Skills/database';
import CSS from 'src/components/Skills/css';
import Mobile from 'src/components/Skills/mobile';

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
        elevation={10}
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
