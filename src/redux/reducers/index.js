import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import skillsReducer from './skillsReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
  project: projectReducer,
  skills: skillsReducer,
  user: userReducer,
});

export default reducers;
