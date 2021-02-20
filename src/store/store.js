import { createStore } from 'redux';
import { todoReducer } from '../store/reducers/todoReducer';

export const store = createStore(todoReducer);
