import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function employeeReducer(state=initialState.employees, action){
    switch (action.type){
        case types.LOAD_EMPLOYEES:
            return action.employees;
        case types.SAVE_EMPLOYEE:
            return [
                ...state.filter(employee => employee._id !== action.employee._id),
                objectAssign({},action.employee)
            ];
        case types.UPDATE_EMPLOYEE:
            return [
                ...state.filter(employee => employee._id !== action.employee._id),
                objectAssign({},action.employee)
            ];
        case types.DELETE_EMPLOYEE:{
            const newState = objectAssign([],state);
            const indexOfEmployee = state.findIndex(employee => {return employee._id === action.employee._id;});
            newState.splice(indexOfEmployee, 1);
            return newState;
        }
        default:
            return state;
    }
}
