import { GRID_ACTION } from "../actions/action-types";
import { GRID_ACTION2 } from "../actions/action-types"; 

const initialState = {
  counter: 0,
};

export const grid = (state = initialState, action) => {
  switch (action.type) {
    case GRID_ACTION:
      return { ...state, ...{ counter: state.counter + 1 }};
    case GRID_ACTION2: 
      return { ...state, ...{ counter: state.counter - 1 }}; 
    default:
      return state;
  }
};
