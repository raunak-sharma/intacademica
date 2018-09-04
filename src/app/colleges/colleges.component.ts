import { Component, OnInit } from '@angular/core';

import { College } from '../shared/college';
import { CollegeDataService } from '../college-data.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {

  constructor(
    private collegeservice : CollegeDataService
  ) { }

  colleges : College[];

  ngOnInit() {
      this.colleges = this.collegeservice.getColleges();
      console.log("Colleges Console mein " , this.colleges);
  }
}
