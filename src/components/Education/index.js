import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import SectionContainer from 'src/components/commons/SectionContainer';

const StyledPaper = styled(Paper)`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 10px 40px 10px;
    background-color: #FFF;
`;

const PaperContainer = (props) => (
    <StyledPaper
        elevation={20}
    >
        {props.children}
    </StyledPaper>
);

const Project = () => (
    <SectionContainer id="education" title="Education">
        <PaperContainer>
            <div />
        </PaperContainer>
    </SectionContainer>
);

export default Project;
