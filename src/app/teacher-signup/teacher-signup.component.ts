import { Component, OnInit } from '@angular/core';

import { EmployeeDataService } from '../employee-data.service';
import { Employee } from '../shared/employee';

import { CollegeDataService } from '../college-data.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empForm, Designation } from '../shared/emp_form';


@Component({
  selector: 'app-teacher-signup',
  templateUrl: './teacher-signup.component.html',
  styleUrls: ['./teacher-signup.component.scss']
})
export class TeacherSignupComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : empForm;
  designations = Designation;
  collegeIDs : string[];

  constructor(
    private employeedataservice : EmployeeDataService,
    private collegedataservice : CollegeDataService,
    private fb: FormBuilder
  ){
    this.createForm();
  }

  ngOnInit() {
    this.collegeIDs = this.collegedataservice.getCollegeIDs();
    console.log(this.collegeIDs);
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      emp_IDNo : '',
      emp_design : '',
      emp_name : '',
      emp_collegeID : '',
      emp_collegeName : '', //Input this
      emp_dept : '',        //Take this
      emp_email : '',
      emp_phoneNo : '',
      emp_imgUrl : '',
      emp_password : ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log('The Feedback recieved ', this.feedback);
    console.log('The Feedback recieved ', this.feedback.emp_collegeName);
    this.feedbackForm.reset();
  }

}
