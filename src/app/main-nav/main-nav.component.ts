import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loggedinservice : LoggedInService,
    private router: Router
  ) { }

  message : boolean;
  student : object;

  ngOnInit() {
    console.log("Tise usesr", this.student);
    this.loggedinservice.currentMessage.subscribe(message => this.message = message)
  }

  logOut() {
    this.loggedinservice.changeMessage(false);
    console.log("At Nav Message = ", this.message);
    this.loggedinservice.logOut();
  }

}