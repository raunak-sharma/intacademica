import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

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

  ngOnInit() {
  }

  logOut() {
    this.loggedinservice.logOut();
  }

}
