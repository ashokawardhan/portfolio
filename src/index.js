import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initOpbeat from 'opbeat-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes';

if (process.env.NODE_ENV === 'production') {
    initOpbeat({
        orgId: 'db23fd131fb940669cde4955b60075d0',
        appId: 'e3aa413a19'
    });
}

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Routes />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
