import { Component, OnInit } from '@angular/core';

import { Employee } from '../shared/employee';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';
import { Years } from '../shared/student_form';

import { teachForm } from '../shared/teach_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : teachForm;
  collegeIDs : string[];
  student : Student;
  years = Years;

  constructor(
    private studentdataservice : StudentDataService,
    private router: Router,
    private fb: FormBuilder,
    private employeedataservice : EmployeeDataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      rollNo: '',
      year: '',
      test1 : '',
      test2 : '',
      sem : ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log('The Feedback recieved ', this.feedback);
    this.feedbackForm.reset();
  }

  onSubmit1() {
    this.feedback = this.feedbackForm.value;
    console.log('The Feedback recieved ', this.feedback);
    this.student = this.studentdataservice.getStudent(this.feedback.rollNo);
    console.log("The attended roll :" , this.student);
    this.feedbackForm.reset();
  }

  addAtt() {
    this.student.totAttd += 1;
    this.student.attended += 1;
  }

  employee : Employee;
  public id: string;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("The id is " + this.id);

    this.employee = this.employeedataservice.getEmployee(this.id);
  }

}