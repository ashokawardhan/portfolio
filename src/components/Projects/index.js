import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import SectionContainer from "src/components/commons/SectionContainer";
import PersonalProjects from "src/components/Projects/personal";
import CollegeProjects from "src/components/Projects/college";

const StyledPaper = styled(Paper)`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px 10px 40px 10px;
    background-color: #fff;
`;

const PaperContainer = ({ children }) => (
    <StyledPaper elevation={20}>{children}</StyledPaper>
);

const Project = () => (
    <SectionContainer id="projects" title="Projects">
        <PaperContainer>
            <PersonalProjects />
        </PaperContainer>
        <PaperContainer>
            <CollegeProjects />
        </PaperContainer>
    </SectionContainer>
);

export default Project;
