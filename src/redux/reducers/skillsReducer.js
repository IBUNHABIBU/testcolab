import actionTypes from '../constants/index';

const initialState = [];

const skillsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_SKILLS:
      return [...payload];
    default:
      return state;
  }
};

export default skillsReducer;
