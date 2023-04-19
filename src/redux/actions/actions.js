import actionTypes from '../constants';

export const addProject = (data) => ({
  type: actionTypes.ADD_PROJECT,
  payload: data,
});

export const addSkills = (data) => ({
  type: actionTypes.ADD_SKILLS,
  payload: data,
});

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});
