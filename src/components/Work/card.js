import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

const CardComponent = ({
    title, subtitle, textComponent, links
}) => (
    <StyledPaper elevation={12}>
        <Card>
            <StyledCardHeader
                title={(
                    <StyledHeaderTitle>
                        {title}
                    </StyledHeaderTitle>
                )}
                subheader={(
                    <StyledHeaderSubtitle>
                        {subtitle()}
                    </StyledHeaderSubtitle>
                )}
            />
            <Divider />
            <CardContent>
                {textComponent()}
            </CardContent>
            <CardActions>
                {links.map((link) => (
                    <Button variant="contained" color="primary" onClick={() => openNewTab(link.url)} key={link.label}>
                        {link.label}
                    </Button>
                ))}
            </CardActions>
        </Card>
    </StyledPaper>
);

export default CardComponent;
