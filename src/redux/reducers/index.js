import { combineReducers } from 'redux';
import projectReducer from './projectReducer';

const reducers = combineReducers({
  project: projectReducer,
  skills: skillsReducer,
});

export default reducers;
