import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Content from 'src/components/About/content';
import SectionContainer from 'src/components/commons/SectionContainer';
import Social from 'src/components/About/social_links';
import AboutImg from 'src/images/about.jpg';

const AvatarContainer = styled.div`
    text-align: center;
`;

const MarginedAvatarContainer = styled.div`
    margin: 10px 10px 0 10px;
    @media (min-width: 720px) {
        margin: 20px 20px 0 20px;
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

const StyledAvatar = styled(Avatar)`
    width: 300px !important;
    height: 300px !important;
    @media (min-width: 720px) {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px;
    }
    display: inline-block !important;
`;

const About = () => (
    <SectionContainer id="about" title="Ashoka Wardhan">
        <MarginedAvatarContainer>
            <AvatarContainer>
                <StyledAvatar
                    src={AboutImg}
                    className="about-image"
                />
            </AvatarContainer>
        </MarginedAvatarContainer>
        <Social />
        <StyledDivider />
        <MarginedPaper elevation={24}>
            <DarkCard>
                <CardContent>
                    <Content />
                </CardContent>
            </DarkCard>
        </MarginedPaper>
    </SectionContainer>
);

export default About;
