import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './views/Root';
import { Provider } from 'react-redux';
import { store } from './store/store';

import fbConfig from './config/fbConfig';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore';

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <Root />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
