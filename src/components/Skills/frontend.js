import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from 'src/components/commons/imageContainer';
import ReactImg from 'src/images/react.png';
import D3Img from 'src/images/d3.png';
import AngularImg from 'src/images/angular.png';
import JSImg from 'src/images/js.png';
import JQueryImg from 'src/images/jquery.png';
import BackboneImg from 'src/images/backbone.png';
import ParseImg from 'src/images/parse.png';
import ReduxImg from 'src/images/redux.png';

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
        <CenterH1>Front End</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={ReactImg} text="React" />
            <ImageContainer src={ReduxImg} text="Redux" />
            <ImageContainer src={D3Img} text="D3.js" />
            <ImageContainer src={AngularImg} text="Angular" />
            <ImageContainer src={JSImg} text="JavaScript" />
            <ImageContainer src={JQueryImg} text="JQuery" />
            <ImageContainer src={BackboneImg} text="Backbone.js" />
            <ImageContainer src={ParseImg} text="Parse" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
