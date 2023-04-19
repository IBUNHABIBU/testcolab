import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import skillsReducer from './skillsReducer';

const reducers = combineReducers({
  project: projectReducer,
  skills: skillsReducer,
});

export default reducers;
