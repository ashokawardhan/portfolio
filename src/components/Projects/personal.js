import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PersonalList from "src/components/Projects/personal-list";
import CardComponent from "src/components/Projects/card";

const CenterH1 = styled.h1`
    text-align: center;
`;
const styles = {
    root: {
        flexGrow: 1
    }
};

const Personal = ({ classes }) => (
    <>
        <CenterH1>Personal</CenterH1>
        <Grid container className={classes.root} spacing={2}>
            {PersonalList.map((project) => (
                <CardComponent {...project} key={project.id} />
            ))}
        </Grid>
    </>
);

export default withStyles(styles)(Personal);
