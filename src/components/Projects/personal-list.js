import React from "react";

export default [
    {
        title: "This Portfolio",
        id: 0,
        textComponent: () => (
            <>
                <p>Contains the code for this website</p>
                <p>
                    Tech used: React, styled-components, material-ui, react-router, google analytics
                </p>
            </>
        ),
        link: {
            url: "https://github.com/ashokawardhan/portfolio",
            label: "Github"
        }
    },
    {
        title: "Babel AMD transformer",
        id: 1,
        textComponent: () => (
            <>
                <p>Converts ES6 import to AMDJS format</p>
                <p>Tech used: Babel parser</p>
            </>
        ),
        link: {
            url:
                "https://github.com/ashokawardhan/babel-plugin-transform-es2015-modules-simple-destructure-amd",
            label: "Github"
        }
    },
    {
        title: "JSON Benchmark",
        id: 2,
        textComponent: () => (
            <>
                <p>Benchmark various JSON libraries in Java</p>
                <p>Tech used: Jackson, Gson, JSON-lib</p>
            </>
        ),
        link: {
            url: "https://github.com/ashokawardhan/json_benchmark",
            label: "Github"
        }
    },
    {
        title: "Expandable List React",
        id: 3,
        textComponent: () => (
            <>
                <p>React Component for expandable table using list tags</p>
                <p>Tech used: React</p>
            </>
        ),
        link: {
            url: "https://github.com/ashokawardhan/ExpandableListReact",
            label: "Github"
        }
    }
];
