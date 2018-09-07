import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../student-data.service';
import { CollegeDataService } from '../college-data.service';
import { LoggedInService } from '../logged-in.service';
import { Router } from '@angular/router';

import { Student } from '../shared/student';

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
    private loggedinservice : LoggedInService,
    private router: Router,
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

  message : boolean;
  tryLogin() {
    this.studentdataservice.login(
      this.feedback.email,
      this.feedback.password
    ).subscribe(
      response => {
        if(response.token) {
          console.log("Logged In bhsdk ", response );
          this.loggedinservice.changeMessage(true);
          var stud = this.studentdataservice.getStudent('123458');
          console.log("The student ds returned", stud);
          this.loggedinservice.setToken(response.token, stud, this.message);

          this.router.navigateByUrl('/dashboard');
        }
        else{
          console.log('Bhai', response.error);
        }
      },
      response => {
          alert(response.error.error);
      }
    )
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log('The Feedback recieved ', this.feedback);

    this.tryLogin();

    this.feedbackForm.reset();
  }

}
