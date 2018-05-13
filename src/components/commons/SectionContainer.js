import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

const StyledAppBar = styled(AppBar)`
    @media (max-width: 720px) {
        display: none !important;
    }
`;

const SectionContainer = (props) => (
    <section id={props.id}>
        <StyledAppBar
            title={props.title}
            showMenuIconButton={false}
            zDepth={2}
        />
        {props.children}
    </section>
);

export default SectionContainer;
