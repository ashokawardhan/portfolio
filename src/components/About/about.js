import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Content from 'src/components/About/content';
import SectionContainer from 'src/components/commons/SectionContainer';
import AboutImg from 'src/images/about.jpg';

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

const StyledAvatar = styled(Avatar)`
    width: 300px !important;
    height: 300px !important;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 60px, rgba(0, 0, 0, 0.22) 0px 15px 20px;
    display: inline-block !important;
`;

const About = () => (
    <SectionContainer id="about" title="Ashoka Wardhan">
        <AvatarContainer>
            <StyledAvatar
                src={AboutImg}
                className="about-image"
            />
        </AvatarContainer>
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
