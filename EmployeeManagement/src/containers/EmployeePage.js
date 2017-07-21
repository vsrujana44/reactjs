import React,{ PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/employeeActions';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';

class EmployeePage extends React.Component{

 constructor(props,context){
    super(props, context);
     this.state = {
        employee : this.props.employee,
        employees : this.props.employees
    };

    this.updateEmployeeState = this.updateEmployeeState.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.loadEmployeeForEdit = this.loadEmployeeForEdit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentWillMount(){
     this.props.actions.loadEmployees();
  }

  updateEmployeeState(name,value){
    const employee = this.state.employee;
    employee[name] = value;
    return this.setState({ employee : employee });
  }

  saveEmployee(){
      if(this.state.employee._id === 0){
        this.props.actions.saveEmployee(this.state.employee, this.props.employees);
      }else{
        this.props.actions.updateEmployee(this.state.employee);
      }
      //this.setState({employee : { _id:0, fName:'', lName:'', mName:''}});
      this.state.employee = { _id:0, fName:'', lName:'', mName:''};
  }

  loadEmployeeForEdit(employee){
      this.setState({employee:{_id:employee._id,fName:employee.fName,lName:employee.lName,mName:employee.mName}});
  }

  deleteEmployee(employee){
     this.props.actions.deleteEmployee(employee);
  }

  render(){
      //const employees = this.props.employees;
      return(
          <div>
              <EmployeeForm
                saveEmployee={this.saveEmployee}
                updateEmployee={this.updateEmployeeState}
                employee={this.state.employee}/>
              <div>
                  <h3>Employee List</h3>
                  <EmployeeList employees={this.props.employees} loadEmployeeForEdit={this.loadEmployeeForEdit} deleteEmployee={this.deleteEmployee}/>
              </div>
          </div>
      );
  }
}

EmployeePage.propTypes = {
    actions: PropTypes.object.isRequired,
    employee: PropTypes.object.isRequired,
    employees: PropTypes.array.isRequired
};

function mapStateToProps(state){
    let localEmployee = { _id:0, fName:'', lName:'', mName:''};

    return {
        employee: localEmployee,
        employees : state.employees == undefined ? [] : state.employees
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeePage);
