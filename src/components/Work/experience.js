import React from 'react';

export default [
    {
        title: 'Software Developement Engineer I',
        subtitle: () => (
            <React.Fragment>
                <div><b>Expedia</b></div>
                <div>March 2018 - Present</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Frontend developer on ReactJS, Redux, and Backbone'}<br />
                    {'- Backend developer on NodeJS and Java'}
                </p>
                <p>
                    {'- Received an award for Openness (new ideas, people and changes)'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-simple-desctructure-amd',
                label: 'babel-amd-plugin'
            }
        ]
    },
    {
        title: 'Associate Software Developement Engineer',
        subtitle: () => (
            <React.Fragment>
                <div><b>Expedia</b></div>
                <div>February 2017 - March 2018</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Frontend developer on ReactJS, Redux, and Backbone'}<br />
                    {'- Backend developer in Java'}
                </p>
                <p>
                    {'- Led efforts to move to ES6'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'https://docs.google.com/presentation/d/1-ghXKrPGRvLcFTJoi1nRinvZ_djpb3ePFGLTVeNxtvc/',
                label: 'ES6 Javascript'
            }
        ]
    },
    {
        title: 'Software Developer',
        subtitle: () => (
            <React.Fragment>
                <div><b>GreyOrange Pte Ltd</b></div>
                <div>June 2016 - February 2017</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Frontend developer on ReactJS, Redux'}
                </p>
                <p>
                    {'- First frontend developer in team, learnt on the job'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'https://www.slideshare.net/AshokaChandraWardhan/redux-tech-talk',
                label: 'Redux Tech Talk'
            }
        ]
    },
    {
        title: 'Full Stack Developer (Intern)',
        subtitle: () => (
            <React.Fragment>
                <div><b>Ravgins</b></div>
                <div>May 2015 - July 2015, January 2016 - June 2016</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Android Developer (SafelyHome Android Application)'}<br />
                    {'- Backend Developer(Backend for Application and web-analytics)'}<br />
                    {'- Web Developer(Development of www.TotalVisible.com and www.safelyhome.com)'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'https://play.google.com/store/apps/details?id=com.ravgins.android.earlyy&hl=en',
                label: 'Total Visible'
            },
            {
                url: 'https://play.google.com/store/apps/details?id=com.ravgins.safely.home&hl=en',
                label: 'Safely Home'
            }
        ]
    },
    {
        title: 'Engineering Intern',
        subtitle: () => (
            <React.Fragment>
                <div><b>PurpleBerry Labs</b></div>
                <div>December 2014 - January 2015</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Worked on creating backend APIs for Android App.'}<br />
                    {'- Worked with connecting MongoDB and Java Netty.io'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'http://www.purpleberrylabs.com/',
                label: 'PurpleBerry Labs'
            }
        ]
    },
    {
        title: 'Engineering Intern',
        subtitle: () => (
            <React.Fragment>
                <div><b>3HD Media</b></div>
                <div>May 2013 - July 2013</div>
            </React.Fragment>
        ),
        textComponent: () => (
            <React.Fragment>
                <p>
                    {'- Created a website for Job search using ASP.Net and C# and SQL as backend.'}
                </p>
            </React.Fragment>
        ),
        links: [
            {
                url: 'http://3hdmedia.com/',
                label: '3HD Media'
            }
        ]
    }
];
