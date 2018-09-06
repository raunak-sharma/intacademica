import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor(
    private router: Router
  ) { }

  setToken(token : string) : void {
    localStorage.setItem(TOKEN, token);
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN) != null;
  }

  logOut() {
    console.log('The Before Logout data : ', localStorage.getItem(TOKEN));
    localStorage.clear();
    console.log("Logging ya out dude");
    console.log('The Logout data : ', localStorage.getItem(TOKEN));
    this.router.navigateByUrl('/home');
  }

}
