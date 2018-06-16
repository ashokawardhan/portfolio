import React from 'react';

export default [
    {
        title: 'This Portfolio',
        id: 0,
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'Contains the code for this website'}
                </p>
                <p>
                    {'Tech used: React, styled-components, material-ui, react-router, google analytics'}
                </p>
            </React.Fragment>
        ),
        link: {
            url: 'https://github.com/th3dark0n3/portfolio',
            label: 'Github'
        }
    },
    {
        title: 'Babel AMD transformer',
        id: 1,
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'Converts ES6 import to AMDJS format'}
                </p>
                <p>
                    {'Tech used: Babel parser'}
                </p>
            </React.Fragment>
        ),
        link: {
            url: 'https://github.com/th3dark0n3/babel-plugin-transform-es2015-modules-simple-destructure-amd',
            label: 'Github'
        }
    },
    {
        title: 'JSON Benchmark',
        id: 2,
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'Benchmark various JSON libraries in Java'}
                </p>
                <p>
                    {'Tech used: Jackson, Gson, JSON-lib'}
                </p>
            </React.Fragment>
        ),
        link: {
            url: 'https://github.com/th3dark0n3/json_benchmark',
            label: 'Github'
        }
    },
    {
        title: 'Expandable List React',
        id: 3,
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'React Component for expandable table using list tags'}
                </p>
                <p>
                    {'Tech used: React'}
                </p>
            </React.Fragment>
        ),
        link: {
            url: 'https://github.com/th3dark0n3/ExpandableListReact',
            label: 'Github'
        }
    }
];
