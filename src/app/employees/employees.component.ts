import { Component, OnInit } from '@angular/core';

import { Employee } from '../shared/employee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private employeedata : EmployeeDataService
  ) { }

  employees : Employee[];

  ngOnInit() {
    this.employees = this.employeedata.getEmployees();
  }

}
