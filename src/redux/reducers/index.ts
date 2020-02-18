import { combineReducers } from 'redux';
import app from './app';
import quiz from './quiz';

const root = combineReducers({ app, quiz });

export type RootState = ReturnType<typeof root>

export default root;
