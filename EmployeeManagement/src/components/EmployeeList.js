import React, { PropTypes } from 'react';

class EmployeeList extends React.Component{

  constructor(props, context){
    super(props, context);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  editEmployee(employee){
      this.props.loadEmployeeForEdit(employee);
  }

  deleteEmployee(employee){
      this.props.deleteEmployee(employee);
  }

  render(){
      return(
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Middle</th>
            <th>Action</th>
          </tr>
          {
            this.props.employees.map(employee =>
              <tr key={employee._id}>
                <td>{employee.fName}</td>
                <td>{employee.lName}</td>
                <td>{employee.mName}</td>
                <td>
                   <input type="button" value="Edit" onClick={() => this.editEmployee(employee)} className="btn btn-primary"></input>
                   &nbsp;
                   <input type="button" value="Delete" onClick={() => this.deleteEmployee(employee)} className="btn btn-danger"></input>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      );
 }

}

EmployeeList.propTypes = {
    employees: PropTypes.array.required,
    loadEmployeeForEdit: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
};

export default EmployeeList;
