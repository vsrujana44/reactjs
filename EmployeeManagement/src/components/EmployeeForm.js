import React, { PropTypes } from 'react';
import TextInput from './TextInput';

class EmployeeForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.save = this.save.bind(this);//bind this to the save method
        this.employeeKeyPress = this.employeeKeyPress.bind(this);
    }

    save() {
       this.props.saveEmployee(this.props.employee);
    }

    employeeKeyPress(name,value){
      this.props.updateEmployee(name,value);
    }

    render(){
        const {employee} = this.props;

        return(
          <div>
              <h2>Employee Creation Form</h2>
              <div className="row">
                  <div  className="col-md-8 col-lg-8 col-sm-6 col-xs-4 well">
                      <div className="form-group">
                          <label htmlFor="fName">Fist Name</label>
                         <TextInput name="fName" value={employee.fName} onChange={this.employeeKeyPress}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="lName">Last Name</label>
                         <TextInput name="lName" value={employee.lName} onChange={this.employeeKeyPress}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="mName">Middle Name</label>
                         <TextInput name="mName" value={employee.mName} onChange={this.employeeKeyPress}/>
                      </div>
                      <input type="submit" value="Save" onClick={this.save} className="btn btn-primary"/>
                  </div>
              </div>
          </div>
        );
    }

}

EmployeeForm.propTypes = {
    updateEmployee: PropTypes.func.isRequired,
    saveEmployee: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired
};

export default EmployeeForm;
