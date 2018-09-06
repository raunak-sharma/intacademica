import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { LoggedInService } from './logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private LoggedInService : LoggedInService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.LoggedInService.isLoggedIn()) {
        return true;
      }

      else {
        this.router.navigate(['login']);
      }
      return false;
  }


}
