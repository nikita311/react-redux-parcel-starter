import { GRID_ACTION } from './action-types';
import { GRID_ACTION2 } from './action-types'; 

export const gridAction = (cell) => {
  return {
    type: GRID_ACTION,
    cell,
  };
};

export const gridAction2 = (cell) => {
  return {
    type: GRID_ACTION2, 
    cell
  }; 
}; 