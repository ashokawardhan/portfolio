import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import CertificateIcon from 'src/components/Education/certificate';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Button from '@material-ui/core/Button';

const openNewTab = (url) => {
    window.open(url, '_blank');
};

const TimelineContent = () => (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<CertificateIcon />}
        >
            <h3 className="vertical-timeline-element-title">{'Webpack 2: The Complete Developer\'s Guide'}</h3>
            <p>
                How to use webpack from start in React application
            </p>
            <p>
                <Button variant="contained" color="secondary" onClick={() => openNewTab('https://www.udemy.com/certificate/UC-EKR3R6J0/')}>
                    Webpack cerificate
                </Button>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<CertificateIcon />}
        >
            <h3 className="vertical-timeline-element-title">The complete React Native and Redux Course</h3>
            <p>
                How to use React Native and Redux together in an application
            </p>
            <p>
                <Button variant="contained" color="secondary" onClick={() => openNewTab('https://www.udemy.com/certificate/UC-QOYOPJMZ/')}>
                    React Native cerificate
                </Button>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Novemeber 2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<CertificateIcon />}
        >
            <h3 className="vertical-timeline-element-title">Designing Gamification Level 1</h3>
            <p>
                How to create gamification around normal website activites
            </p>
            <p>
                <Button variant="contained" color="secondary" onClick={() => openNewTab('https://www.udemy.com/certificate/UC-K8MCMHAR/')}>
                    Gamification Level I cerificate
                </Button>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2016"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">IIIT Allahabad</h3>
            <h4 className="vertical-timeline-element-subtitle">B. Tech (IT)</h4>
            <p>
                Open Source Co-ordinator<br />
                Firefox Student Ambassador<br />
                City Co-ordinator of CAG Allahabad Chapter
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2012"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Sarvodaya Senior Secondary School</h3>
            <h4 className="vertical-timeline-element-subtitle">Class 12th</h4>
            <p>
                Science with Computer Science
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Air Force Golden Jubilee Institute</h3>
            <h4 className="vertical-timeline-element-subtitle">Class 10th</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
        />
    </VerticalTimeline>
);

export default TimelineContent;
