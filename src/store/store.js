import { getFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import fbConfig from '../config/fbConfig';

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig)
    )
);
