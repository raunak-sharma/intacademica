import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Student } from './shared/student';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const TOKEN = "TOKEN";
var USER = "User";

@Injectable({
  providedIn: "root"
})
export class LoggedInService {
  constructor(private router: Router
  ) {}

  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message : boolean) {
    this.messageSource.next(message);
  }


  setToken(token: string, student : Student): void {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USER, JSON.stringify(student));
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN) != null;
  }

  logOut() {
    console.log("The Before Logout data : ", localStorage.getItem(TOKEN));
    localStorage.clear();
    console.log("Logging ya out dude");
    console.log("The Logout data : ", localStorage.getItem(TOKEN));
    this.router.navigateByUrl("/home");
  }
}
