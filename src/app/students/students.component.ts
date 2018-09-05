import { Component, OnInit } from '@angular/core';

import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentSearch } from '../shared/searcher';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : studentSearch;
  selStudents : Student[];

  constructor(
    private studentservice : StudentDataService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  students : Student[];

  ngOnInit() {
    this.students = this.studentservice.getStudents();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      name : ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    this.students = this.studentservice.getStudentSearch(this.feedback.name);
    console.log('The Students Feedback recieved ', this.students);
    this.feedbackForm.reset();
  }

}
