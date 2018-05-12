import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import CardComponent from 'src/components/Work/card';
import Experiences from 'src/components/Work/experience';

const StyledAppBar = styled(AppBar)`
    @media (max-width: 720px) {
        display: none !important;
    }
`;

const Work = () => (
    <section id="work">
        <StyledAppBar
            title="Work"
            showMenuIconButton={false}
            zDepth={2}
        />
        {
            Experiences.map((experience) => <CardComponent {...experience} key={experience.title} />)
        }
    </section>
);

export default Work;
