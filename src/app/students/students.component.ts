import { Component, OnInit } from '@angular/core';

import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(
    private studentservice : StudentDataService
  ) { }

  students : Student[];

  ngOnInit() {
    this.students = this.studentservice.getStudents();
  }

}
