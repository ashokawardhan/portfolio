import React from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const openNewTab = (url) => {
    window.open(url, '_blank');
};

const StyledCardHeader = styled(CardHeader)`
    background-color: #000;
`;

const StyledHeaderSubtitle = styled.div`
    color: #FFF;
    font-size: 16px;
`;

const StyledHeaderTitle = styled.div`
    color: #FFF;
    font-size: 22px;
`;

const StyledPaper = styled(Paper)`
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 30px;
        margin-bottom: 30px;
        @media (min-width: 720px) {
            margin-left: 100px;
            margin-right: 100px;
            margin-top: 40px;
            margin-bottom: 40px;
        }
`;

const CardComponent = (props) => (
    <StyledPaper zDepth={4}>
        <Card>
            <StyledCardHeader
                title={
                    <StyledHeaderTitle>
                        {props.title}
                    </StyledHeaderTitle>
                }
                subtitle={
                    <StyledHeaderSubtitle>
                        {props.subtitle()}
                    </StyledHeaderSubtitle>
                }
            />
            <Divider />
            <CardText>
                {props.textComponent()}
            </CardText>
            <CardActions>
                {props.links.map((link) => (
                    <RaisedButton label={link.label} secondary onClick={() => openNewTab(link.url)} key={link.label} />
                ))}
            </CardActions>
        </Card>
    </StyledPaper>
);

export default CardComponent;
