import { createStore } from 'redux';
import { toDoReducer } from './reducer';

export const store = createStore(toDoReducer);
