import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from '../serviceWorker';
import { I18nProvider } from '@lingui/react';

const MyApp = () => (
    <I18nProvider language='en'>
        <App />
    </I18nProvider>
)

ReactDOM.render(<MyApp />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();