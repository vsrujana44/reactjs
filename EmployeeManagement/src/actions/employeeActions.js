import * as types from '../constants/actionTypes';
import employeeApi from '../api/employeeApi.js';

export function saveEmployee(employee, employees){
    setIdForEmployee(employee, employees);

    return function (dispatch) {
        return employeeApi.createEmployee(employee).then(response => {
          dispatch({
              type: types.SAVE_EMPLOYEE,
              employee
          });
          return response;
        }).catch(error => {
          throw(error);
        });
      };
}

function setIdForEmployee(employee, employees){

    let maxId = 0;
    if(employee._id === 0){
        if(employees !== undefined){
            for(let i = 0; i<employees.length; i++){
                if(employees[i]._id > maxId){
                    maxId = employees[i]._id;
                }
            }
        }else{
            employee._id = 1;
        }
    }
    employee._id = maxId + 1;

}

export function updateEmployee(employee){
      return function (dispatch) {
        return employeeApi.updateEmployee(employee).then(response => {
          dispatch({
              type: types.UPDATE_EMPLOYEE,
              employee
          });
        }).catch(error => {
          throw(error);
        });
    };
}

export function deleteEmployee(employee){
      return function(dispatch) {
        return employeeApi.deleteEmployee(employee).then(() => {
         dispatch({
             type: types.DELETE_EMPLOYEE,
             employee
         });
         return;
        }).catch(error => {
         throw(error);
        });
      };
}

export function loadEmployees(){

    return function(dispatch) {
      return employeeApi.getAllEmployees().then(employees => {
        dispatch({
            type: types.LOAD_EMPLOYEES,
            employees
        });
      }).catch(error => {
        throw(error);
      });
  };

}
