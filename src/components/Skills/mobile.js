import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from '../commons/imageContainer';
import ReactNative from '../../images/react.png';
import AndroidImg from '../../images/android.png';

const CenterH1 = styled.h1`
    text-align: center;
`;
const ImageContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const frontend = () => (
    <Fragment>
        <CenterH1>Mobile Development</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={ReactNative} text="React Native" />
            <ImageContainer src={AndroidImg} text="Android" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
