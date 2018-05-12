import React from 'react';

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

export default ImageContainer;
