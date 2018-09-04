import { Component, OnInit } from '@angular/core';

import { Employee } from '../shared/employee';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(
    private employeedataservice : EmployeeDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  employee : Employee;
  public id: string;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("The id is " + this.id);

    this.employee = this.employeedataservice.getEmployee(this.id);
  }

}