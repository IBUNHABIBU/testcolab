import actionTypes from '../constants/index';

const initialState = [];

const projectReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PROJECT:
      return [...payload];
    default:
      return state;
  }
};

export default projectReducer;
