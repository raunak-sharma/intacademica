import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../student-data.service';
import { Student } from '../shared/student';

import { CollegeDataService } from '../college-data.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stdForm, Years } from '../shared/student_form';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : stdForm;
  collegeIDs : string[];
  years = Years;

  constructor(
    private studentdataservice : StudentDataService,
    private collegedataservice : CollegeDataService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.collegeIDs = this.collegedataservice.getCollegeIDs();
    console.log(this.collegeIDs);
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      rollNo: '',
      collegeID: '',
      collegeName: '',  //Input this
      dept: '',         //Select This
      year: '',
      name : '',
      imgUrl: '',
      email: '',
      password : '',
      phoneNo: '',
      skills: [],
      hobbies: []
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log('The Feedback recieved ', this.feedback);
    this.feedbackForm.reset();
  }

}
