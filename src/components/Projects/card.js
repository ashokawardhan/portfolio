import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const StyledCardHeader = styled(CardHeader)`
    background-color: #000;
`;

const StyledHeaderTitle = styled.div`
    color: #FFF;
    font-size: 22px;
`;

const styles = {
    root: {
        height: '100%'
    }
};
@withStyles(styles)
class CardComponent extends Component {
    openNewTab = () => {
        const { link } = this.props;
        link && link.url && window.open(link.url, '_blank');
    };

    render() {
        const { props } = this;
        return (
            <Grid item xs={12} sm={6}>
                <Card onClick={this.openNewTab} classes={{ root: props.classes.root }}>
                    <StyledCardHeader
                        title={
                            <StyledHeaderTitle>
                                {props.title}
                            </StyledHeaderTitle>
                        }
                    />
                    <Divider />
                    <CardContent>
                        {props.textComponent()}
                    </CardContent>
                    <CardActions>
                        {props.link &&
                            <Button variant="contained" color="secondary">
                                {props.link.label}
                            </Button>
                        }
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default CardComponent;
