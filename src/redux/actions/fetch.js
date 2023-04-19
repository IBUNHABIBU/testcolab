import axios from 'axios';
import {
  addProject, setUser,
} from './actions';
// export const urlBase = 'https://colapi.darlive.cyou';
export const urlBase = 'http://localhost:3000';

export const createProject = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/projects`, {
    withCredentials: true,
  });
  dispatch(addProject(response.data));
};

export const createSkills = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/projects`, {
    withCredentials: true,
  });
  dispatch(addSkills(response.data));
};

export const fetchProjects = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/projects`);
  dispatch(addProject(response.data));
  console.log('Fetched');
};

export const checkUser = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/logged_in`, {
    withCredentials: true, mode: 'no-cors',
  });
  dispatch(setUser(response.data));
};
