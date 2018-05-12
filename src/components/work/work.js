import React from 'react';
import AppBar from 'material-ui/AppBar';
import CardComponent from 'src/components/Work/card';
import Experiences from 'src/components/Work/experience';

const Work = () => (
    <section id="work">
        <AppBar
            title="Work"
            showMenuIconButton={false}
            zDepth={2}
            className="inside-bar"
        />
        {
            Experiences.map((experience) => <CardComponent {...experience} key={experience.title} />)
        }
    </section>
);

export default Work;
