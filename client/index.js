import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from '../serviceWorker';
import { I18nProvider } from '@lingui/react';
import { unpackCatalog } from '@lingui/core';
import catalogEn from '../server/public/locales/en/messages.js';
import catalogDe from '../server/public/locales/de/messages.js';


const MyApp = () => {
    return (
        <I18nProvider catalogs={{en: catalogEn}} language='en'>
            <App />
        </I18nProvider>
    )
}

ReactDOM.render(<MyApp />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
