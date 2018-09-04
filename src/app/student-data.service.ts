import { Injectable } from '@angular/core';

import { Student } from './shared/student';
import { STUDENTS } from './shared/students';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }


  student : Student;

  getStudents() {
    return STUDENTS;
  }

  getStudent(roll : string) {
    console.log('The final student = ', STUDENTS.filter(student => student.rollNo === roll)[0]);
    return STUDENTS.filter(student => student.rollNo === roll)[0];
  }

  getStudentsByClg(id : string) {
    return STUDENTS.filter(student => student.collegeID === id);
  }

}
