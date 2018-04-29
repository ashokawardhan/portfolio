import React from 'react';
import Paper from 'material-ui/Paper';
import ReactImg from '../../images/react.png';
import D3Img from '../../images/d3.png';
import AngularImg from '../../images/angular.png';
import JSImg from '../../images/js.png';
import JQueryImg from '../../images/jquery.png';
import BackboneImg from '../../images/backbone.png';
import ParseImg from '../../images/parse.png';
import ReduxImg from '../../images/redux.png';


const ImageContainer = (props) => (
    <div
        style={{
            textAlign: 'center',
            width: 100,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 25
        }}
    >
        <img src={props.src} alt={props.text} style={{ width: 100, height: 100, display: 'block' }} />
        <span>{props.text}</span>
    </div>
);

const Skills = () => (
    <div>
        <Paper
            zDepth={2}
            style={{
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                backgroundColor: '#FFF'
            }}
        >
            <h1 style={{ textAlign: 'center' }}>Front End</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ImageContainer src={ReactImg} text="React" />
                <ImageContainer src={ReduxImg} text="Redux" />
                <ImageContainer src={D3Img} text="D3.js" />
                <ImageContainer src={AngularImg} text="Angular" />
                <ImageContainer src={JSImg} text="JavaScript" />
                <ImageContainer src={JQueryImg} text="JQuery" />
                <ImageContainer src={BackboneImg} text="Backbone.js" />
                <ImageContainer src={ParseImg} text="Parse" />
            </div>
        </Paper>
    </div>
);

export default Skills;
