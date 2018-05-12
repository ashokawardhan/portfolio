import React, { Fragment } from 'react';
import ImageContainer from '../commons/imageContainer';
import ReactImg from '../../images/react.png';
import D3Img from '../../images/d3.png';
import AngularImg from '../../images/angular.png';
import JSImg from '../../images/js.png';
import JQueryImg from '../../images/jquery.png';
import BackboneImg from '../../images/backbone.png';
import ParseImg from '../../images/parse.png';
import ReduxImg from '../../images/redux.png';

const frontend = () => (
    <Fragment>
        <h1 style={{ textAlign: 'center' }}>Front End</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <ImageContainer src={ReactImg} text="React" />
            <ImageContainer src={ReduxImg} text="Redux" />
            <ImageContainer src={D3Img} text="D3.js" />
            <ImageContainer src={AngularImg} text="Angular" />
            <ImageContainer src={JSImg} text="JavaScript" />
            <ImageContainer src={JQueryImg} text="JQuery" />
            <ImageContainer src={BackboneImg} text="Backbone.js" />
            <ImageContainer src={ParseImg} text="Parse" />
        </div>
    </Fragment>
);

export default frontend;
