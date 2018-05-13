import React from 'react';
import SectionContainer from 'src/components/commons/SectionContainer';
import CardComponent from 'src/components/Work/card';
import Experiences from 'src/components/Work/experience';

const Work = () => (
    <SectionContainer id="work" title="Work">
        {
            Experiences.map((experience) => <CardComponent {...experience} key={experience.title} />)
        }
    </SectionContainer>
);

export default Work;
