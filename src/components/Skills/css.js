import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from '../commons/imageContainer';
import Css3Img from '../../images/css3.png';
import SassImg from '../../images/sass.png';
import LessImg from '../../images/less.png';
import BootstrapImg from '../../images/bootstrap.png';
import MaterialUI from '../../images/material-ui.png';
import StyledComponentsImg from '../../images/styled-components.png';

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
        <CenterH1>Styling</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={Css3Img} text="CSS 3" />
            <ImageContainer src={SassImg} text="SASS" />
            <ImageContainer src={LessImg} text="LESS" />
            <ImageContainer src={BootstrapImg} text="Bootstrap" />
            <ImageContainer src={MaterialUI} text="Material UI" />
            <ImageContainer src={StyledComponentsImg} text="Styled Components" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
