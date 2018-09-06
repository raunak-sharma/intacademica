import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResultModel } from './shared/loginModel';

import { Student } from './shared/student';
import { STUDENTS } from './shared/students';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(
    private http: HttpClient
  ) { }


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

  getStudentSearch(name : string) {
    return STUDENTS.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
  }

  login(email : string, password : string){
    return this.http.post<LoginResultModel>('https://reqres.in/api/login', {
      email: email,
      password: password
    });
  }

}
