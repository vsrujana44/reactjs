
class EmployeeApi {

  static getAllEmployees() {
    return fetch('http://localhost:8080/employees').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createEmployee(employee) {
    const request = new Request('http://localhost:8080/employee', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(employee)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateEmployee(employee) {
    const request = new Request(`http://localhost:8080/employee/${employee._id}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(employee)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteEmployee(employee) {
    const request = new Request(`http://localhost:8080/employee/${employee._id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }


 }

export default EmployeeApi;
