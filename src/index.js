import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hot } from 'react-hot-loader';
import Routes from './routes';


injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Routes />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
