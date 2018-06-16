import React, { Fragment } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CollegeList from 'src/components/Projects/college-list';
import CardComponent from 'src/components/Projects/card';

const CenterH1 = styled.h1`
    text-align: center;
`;
const styles = {
    root: {
        flexGrow: 1,
    }
};

const College = (props) => (
    <Fragment>
        <CenterH1>College</CenterH1>
        <Grid container className={props.classes.root} spacing={16}>
            {
                CollegeList.map((project) => <CardComponent {...project} key={project.id} />)
            }
        </Grid>
    </Fragment>
);

export default withStyles(styles)(College);
