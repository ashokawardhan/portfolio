import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { hot } from 'react-hot-loader';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import DrawerContainer from './components/Drawer/Drawer';
import './styles/styles.css';

const RefreshIcon = () => (<RefreshIndicator
    size={200}
    loadingColor="#FF9800"
    status="loading"
    style={{
        display: 'inline-block',
        position: 'fixed',
        left: '50%',
        top: '35%'
    }}
/>);

const AboutComponent = Loadable({
    loader: () => import('./components/About/about'),
    loading: RefreshIcon
});

const SkillsComponent = Loadable({
    loader: () => import('./components/Skills/skill'),
    loading: RefreshIcon
});

const WorkComponent = Loadable({
    loader: () => import('./components/Work/work'),
    loading: RefreshIcon
});

const ProjectsComponent = Loadable({
    loader: () => import('./components/Projects/projects'),
    loading: RefreshIcon
});

const Routes = () => (
    <HashRouter>
        <div>
            <DrawerContainer />
            <div className="container">
                <Route exact path="/" component={AboutComponent} />
                <Route path="/skills" component={SkillsComponent} />
                <Route path="/work" component={WorkComponent} />
                <Route path="/projects" component={ProjectsComponent} />
            </div>
        </div>
    </HashRouter>
);

export default hot(module)(Routes);
