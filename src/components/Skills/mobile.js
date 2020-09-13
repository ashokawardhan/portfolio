import React from "react";
import styled from "styled-components";
import ImageContainer from "src/components/commons/imageContainer";
import ReactNative from "src/images/react.png";
import AndroidImg from "src/images/android.png";

const CenterH1 = styled.h1`
    text-align: center;
`;
const ImageContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const frontend = () => (
    <>
        <CenterH1>Mobile Development</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={ReactNative} text="React Native" />
            <ImageContainer src={AndroidImg} text="Android" />
        </ImageContainerWrapper>
    </>
);

export default frontend;
