import { combineReducers } from 'redux';
import { jobs } from './jobs';
import { resumes } from './resumes'
import { graphics } from './graphics'

export const rootReducer = combineReducers({
jobs,
resumes,
graphics
});

export type AppState = ReturnType<typeof rootReducer>;
