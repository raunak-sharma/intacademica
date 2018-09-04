import { Component, OnInit, Input, Inject } from '@angular/core';
import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  @Input()
  student : Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentdataservice : StudentDataService
  ) { }

  params : Params;
  public id: string;

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("The id is " + this.id);

    this.student = this.studentdataservice.getStudent(this.id);
  }

}
