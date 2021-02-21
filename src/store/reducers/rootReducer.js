import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { todoReducer } from './todoReducer';
export const rootReducer = combineReducers({
    todos: todoReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});
