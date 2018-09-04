import { Injectable } from '@angular/core';

import { EMPLOYEES } from './shared/employees';
import { Employee } from './shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  employee : Employee;

  getEmployees() {
    return EMPLOYEES;
  }

  getEmployee(id : string) {
    return EMPLOYEES.filter(employee => employee.emp_IDNo === id)[0];
  }

  getEmployeesByClg(id : string) {
    return EMPLOYEES.filter(employee => employee.emp_collegeID === id);
  }
}
