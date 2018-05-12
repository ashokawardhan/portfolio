import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
    text-align: center;
    width: 100px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
`;

const StyledImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    display: block;
`;

const ImageContainer = (props) => (
    <StyledImageContainer>
        <StyledImage src={props.src} alt={props.text} />
        <span>{props.text}</span>
    </StyledImageContainer>
);

export default ImageContainer;
