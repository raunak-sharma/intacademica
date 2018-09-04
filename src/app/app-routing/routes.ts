import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CollegesComponent } from '../colleges/colleges.component';
import { NotesComponent } from '../notes/notes.component';
import { QpapersComponent } from '../qpapers/qpapers.component';
import { SignupComponent } from '../signup/signup.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { StudentsComponent } from '../students/students.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { CollegeDetailComponent } from '../college-detail/college-detail.component';
import { TeacherSignupComponent } from '../teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from '../student-signup/student-signup.component';

export const routes : Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomepageComponent
    },

    {
        path: 'colleges',
        component: CollegesComponent
    },

    {
        path: 'colleges/:id',
        component: CollegeDetailComponent
    },

    {
        path: 'students',
        component: StudentsComponent
    },

    {
        path: 'students/:id',
        component: StudentDetailComponent
    },

    {
        path: 'employees',
        component: EmployeesComponent
    },

    {
        path: 'employees/:id',
        component: EmployeeDetailComponent
    },

    {
        path: 'notes',
        component: NotesComponent
    },

    {
        path: 'qpapers',
        component: QpapersComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'signup/employee',
        component: TeacherSignupComponent
    },

    {
        path: 'signup/student',
        component: StudentSignupComponent
    }

];