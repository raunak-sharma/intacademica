import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../student-data.service';
import { CollegeDataService } from '../college-data.service';
import { LoggedInService } from '../logged-in.service';
import { Router } from '@angular/router';

import { Student } from '../shared/student';

import { logInForm } from '../shared/login_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : logInForm;
  collegeIDs : string[];

  constructor(
    private studentdataservice : StudentDataService,
    private collegedataservice : CollegeDataService,
    private loggedinservice : LoggedInService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  message : boolean;

  ngOnInit() {
    this.loggedinservice.currentMessage.subscribe(message => this.message = message)
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      email: '',
      password : ''
    });
  }

  tryLogin() {
    this.studentdataservice.login(
      this.feedback.email,
      this.feedback.password
    ).subscribe(
      response => {
        if(response.token) {
          console.log("Logged In ", response );

          this.loggedinservice.changeMessage(true);
          console.log("At Log Message = ", this.message);

          var stud = this.studentdataservice.getStudent('123458');
          console.log("The student ds returned", stud);
          this.loggedinservice.setToken(response.token, stud, this.message);
          this.router.navigateByUrl('/employees/123456');
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
