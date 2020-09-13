import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { SocialIcon } from "react-social-icons";

const StyledSocialIcon = styled(SocialIcon)`
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
`;
const MarginedPaper = styled(Paper)`
    margin: 0 10px 10px 10px;
    @media (min-width: 720px) {
        margin: 0 20px 20px 20px;
    }
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Social = () => (
    <MarginedPaper elevation={10}>
        <StyledSocialIcon url="https://www.linkedin.com/in/ashokacw/" />
        <StyledSocialIcon url="https://github.com/ashokawardhan" />
        <StyledSocialIcon url="https://medium.com/@ashokawardhan" />
        <StyledSocialIcon url="https://twitter.com/ashokawardhan" />
        <StyledSocialIcon
            url="https://devrant.com/users/thedarkone"
            network="rss"
        />
        <StyledSocialIcon url="https://www.facebook.com/Ash.CW" />
        <StyledSocialIcon url="mailto:ashokwardha@gmail.com" />
    </MarginedPaper>
);

export default Social;
