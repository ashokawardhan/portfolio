import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from 'src/components/commons/imageContainer';
import JavaImg from 'src/images/java.png';
import SpringBootImg from 'src/images/springboot.png';
import NettyImg from 'src/images/netty.png';
import PhpImg from 'src/images/php.png';
import NodeImg from 'src/images/node.png';
import ExpressImg from 'src/images/express.png';
import HapiImg from 'src/images/hapi.png';
import AspNetImg from 'src/images/aspnet.png';

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
        <CenterH1>Back End</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={JavaImg} text="Java" />
            <ImageContainer src={SpringBootImg} text="Spring Boot" />
            <ImageContainer src={NettyImg} text="Netty.io" />
            <ImageContainer src={PhpImg} text="PHP" />
            <ImageContainer src={NodeImg} text="Node.js" />
            <ImageContainer src={AspNetImg} text="ASP.net" />
            <ImageContainer src={ExpressImg} text="Express" />
            <ImageContainer src={HapiImg} text="Hapi" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
