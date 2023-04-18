import axios from "axios";
import {
    addProject
  } from './actions';
// export const urlBase = 'https://colapi.darlive.cyou';
export const urlBase = 'http://localhost:3000/api/v1/projects';

export const createProject = () => async (dispatch) => {
    const response = await axios.get(`${urlBase}/api/v1/projectss`, {
      withCredentials: true,
    });
    dispatch(addProject(response.data));
  };