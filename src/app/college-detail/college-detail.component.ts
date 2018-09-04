import { Component, OnInit } from '@angular/core';

import { College } from '../shared/college';
import { CollegeDataService } from '../college-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Employee } from '../shared/employee';
import { EmployeeDataService } from '../employee-data.service';
import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-college-detail',
  templateUrl: './college-detail.component.html',
  styleUrls: ['./college-detail.component.scss']
})
export class CollegeDetailComponent implements OnInit {

  constructor(
    private collegedataservice : CollegeDataService,
    private activatedRoute: ActivatedRoute,
    private employeedataservice: EmployeeDataService,
    private studentdataservice : StudentDataService
  ) { }

  college : College;
  public id: string;

  employees : Employee[];
  students : Student[];

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("The id is " + this.id);

    this.college = this.collegedataservice.getCollege(this.id);
    this.employees = this.employeedataservice.getEmployeesByClg(this.id);
    this.students = this.studentdataservice.getStudentsByClg(this.id);
  }

}
