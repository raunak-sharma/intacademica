import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private loggedinservice : LoggedInService,
    private router: Router
  ) { }

  student : Student;
  message : boolean;

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('User'));
    this.loggedinservice.currentMessage.subscribe(message => this.message = message)
  }

  logOut() {
    this.loggedinservice.logOut();
    this.loggedinservice.changeMessage(false);
    console.log("At Dash Message = ", this.message);
  }

}
