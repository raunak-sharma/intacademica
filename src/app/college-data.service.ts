import { Injectable } from '@angular/core';

import { College } from './shared/college';
import { COLLEGES } from './shared/colleges';
import { map } from 'rxjs/operators';
/*
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import 'rxjs/add/observable/of';

import { delay } from 'rxjs/operators';
*/

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {

  constructor() { }

  college : College;

  getColleges() {
    return COLLEGES;
  }

  getCollege(id : string) {
    return COLLEGES.filter(college => college.c_IDNo === id)[0];
  }

  getCollegeIDs() {
    return COLLEGES.map(college => college.c_IDNo);
  }
/*
  getColleges() : Observable<College[]> {
    console.log("In services ", COLLEGES);
    return of(COLLEGES).pipe(delay(2000));
  }
*/

}
