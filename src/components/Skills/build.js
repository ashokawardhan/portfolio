import React, { Fragment } from 'react';
import styled from 'styled-components';
import ImageContainer from '../commons/imageContainer';
import WebpackImg from '../../images/webpack.png';
import GulpImg from '../../images/gulp.png';
import GruntImg from '../../images/grunt.png';
import GradleImg from '../../images/gradle.png';
import MavenImg from '../../images/maven.png';

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
        <CenterH1>Build Tools</CenterH1>
        <ImageContainerWrapper>
            <ImageContainer src={WebpackImg} text="Webpack" />
            <ImageContainer src={GulpImg} text="Gulp" />
            <ImageContainer src={GruntImg} text="Grunt" />
            <ImageContainer src={GradleImg} text="Gradle" />
            <ImageContainer src={MavenImg} text="Maven" />
        </ImageContainerWrapper>
    </Fragment>
);

export default frontend;
