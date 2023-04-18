import axios from "axios";

export const urlBase = 'https://car.darlive.cyou';
export const urlBase = 'https://car.darlive.cyou';

export const createProject = () => async (dispatch) => {
    const response = await axios.get(`${urlBase}/api/v1/projectss`, {
      withCredentials: true,
    });
    dispatch(addCar(response.data));
  };