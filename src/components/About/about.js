import React from 'react';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Content from 'src/components/About/content';
import AboutImg from '../../images/about.jpg';

const AvatarContainer = styled.div`
    margin: 20px;
    text-align: center;
    @media (min-width: 720px) {
        background-color: #E4DBBF;
    }
`;

const StyledDivider = styled(Divider)`
    margin-left: 20px;
    margin-right: 20px;
`;

const MarginedPaper = styled(Paper)`
    margin: 10px;
    @media (min-width: 720px) {
        margin: 20px;
    }
`;

const DarkCard = styled(Card)`
    background-color: #F6F6F6;
`;

const StyledCardText = styled(CardText)`
    font-size: 30px;
`;

const StyledAvatar = styled(Avatar)`
    width: 300px !important;
    height: 300px !important;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;
`;

const About = () => (
    <div>
        <AvatarContainer>
            <StyledAvatar
                src={AboutImg}
                className="about-image"
            />
        </AvatarContainer>
        <StyledDivider />
        <MarginedPaper zDepth={5}>
            <DarkCard>
                <StyledCardText>
                    <Content />
                </StyledCardText>
            </DarkCard>
        </MarginedPaper>
    </div>
);

export default About;
