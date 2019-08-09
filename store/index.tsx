import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer } from '../reducers';

export const store = createStore(modalReducer, applyMiddleware(thunk));
