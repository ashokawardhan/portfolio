import React from "react";

export default [
    {
        title: "3D reconstruction from 2D images",
        id: 0,
        textComponent: () => (
            <>
                <p>Create 3D model from camera pictures of an object</p>
                <p>Tech used: Matlab</p>
            </>
        )
    },
    {
        title: "Song Hit Probabiity Prediction Anaylsis",
        id: 1,
        textComponent: () => (
            <>
                <p>
                    Classification of Songs using Data Mining, BOW analysis, neuro-fuzzy classification
                </p>
                <p>The linked project contains song data extraction</p>
                <p>Tech used: JavaScript, Java</p>
            </>
        ),
        link: {
            url: "https://github.com/ashokawardhan/song-class",
            label: "Github"
        }
    },
    {
        title: "Comparison Of Classification Algorithms in Remote Sensing",
        id: 2,
        textComponent: () => (
            <>
                <p>Implementation Of Supervised Classification</p>
                <p>Devised a new method based on GIST features</p>
                <p>Tech used: Matlab</p>
            </>
        )
    },
    {
        title: "Walkthrough of Lecture Theatre at College",
        id: 3,
        textComponent: () => (
            <p>
                Implemented walkthrough in First Person Perspective using CopperCube and WebGL.
            </p>
        )
    },
    {
        title: "Song Hit Probabiity Prediction Anaylsis",
        id: 4,
        textComponent: () => (
            <>
                <p>
                    Java GUI based Airline Booking System for use at terminals, using Swing and Awt API. Backend using Oracle SQL, and connection provided using JDBC.
                </p>
                <p>Tech used: Java, Swing, Oracle SQL</p>
            </>
        ),
        link: {
            url: "https://github.com/ashokawardhan/Airplane",
            label: "Github"
        }
    },
    {
        title: "Job Seeker Search Website",
        id: 5,
        textComponent: () => (
            <>
                <p>Created a website for Job seeker search in India</p>
                <p>Tech used: ASP.Net, C#, MS Access</p>
            </>
        )
    }
];
