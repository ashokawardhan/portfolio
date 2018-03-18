import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import universal from 'react-universal-component';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { hot } from 'react-hot-loader';
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

const UniversalComponent = universal((props) => import(`${props.path}`), {
    loading: RefreshIcon,
    minDelay: 500
});

const AboutComponent = () => <UniversalComponent path="./components/About/about" />;

const SkillsComponent = () => <UniversalComponent path="./components/Skills/skill" />;

const WorkComponent = () => <UniversalComponent path="./components/Work/work" />;

const ProjectsComponent = () => <UniversalComponent path="./components/Projects/projects" />;

const Routes = () => (
    <HashRouter>
        <div>
            <DrawerContainer />
            <div className="container">
                <Route exact path="/" component={AboutComponent} key={Math.random()} />
                <Route path="/skills" component={SkillsComponent} key={Math.random()} />
                <Route path="/work" component={WorkComponent} key={Math.random()} />
                <Route path="/projects" component={ProjectsComponent} key={Math.random()} />
            </div>
        </div>
    </HashRouter>
);

export default hot(module)(Routes);
