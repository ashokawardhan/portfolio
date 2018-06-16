import React, { Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import universal from 'react-universal-component';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { hot } from 'react-hot-loader';
import ReactGA from 'react-ga';
import createHashHistory from 'history/createHashHistory';
import DrawerContainer from 'src/components/Drawer/Drawer';

if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-115961362-1', {
        gaOptions: {
            siteSpeedSampleRate: 100
        }
    });
    ReactGA.pageview(window.location.hash);

    const history = createHashHistory();

    history.listen(() => {
        ReactGA.pageview(window.location.hash);
    });
}

const ContainerDiv = styled.div`
    @media (min-width: 720px) {
        margin-left: 256px;
    }
`;

const StyledCircularProgress = styled(CircularProgress)`
    display: inline-block;
    position: fixed;
    left: 50%;
    @media (max-width: 720px) {
        left: 20%;
    }
    top: 35%;
`;

const RefreshIcon = () => (<StyledCircularProgress
    size={200}
    style={{ color: '#FF9800' }}
    thickness={5}
/>);

const UniversalComponent = universal((props) => import(`${props.path}`), {
    loading: RefreshIcon,
    minDelay: 1000
});

const AboutComponent = () => <UniversalComponent path="./components/About/about" />;

const SkillsComponent = () => <UniversalComponent path="./components/Skills/skill" />;

const WorkComponent = () => <UniversalComponent path="./components/Work/work" />;

const ProjectsComponent = () => <UniversalComponent path="./components/Projects/projects" />;

const Routes = () => (
    <HashRouter>
        <Fragment>
            <DrawerContainer />
            <ContainerDiv>
                <Route exact path="/" component={AboutComponent} key={Math.random()} />
                <Route path="/skills" component={SkillsComponent} key={Math.random()} />
                <Route path="/work" component={WorkComponent} key={Math.random()} />
                <Route path="/projects" component={ProjectsComponent} key={Math.random()} />
            </ContainerDiv>
        </Fragment>
    </HashRouter>
);

export default hot(module)(Routes);
