// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; 
import employees from './employeeReducer';

const rootReducer = combineReducers({
   employees,
   routing: routerReducer 
});

export default rootReducer;