import {combineReducers, createStore} from 'redux';
import {post_reducer, user_reducer} from './actions';

let combine = combineReducers({user_reducer, post_reducer});
export const store = createStore(combine);
