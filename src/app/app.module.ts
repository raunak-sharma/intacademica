import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CollegesComponent } from './colleges/colleges.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotesComponent } from './notes/notes.component';
import { QpapersComponent } from './qpapers/qpapers.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CollegeDataService } from './college-data.service';
import { EmployeesComponent } from './employees/employees.component';

import { MaterialModule } from './shared/material';
import 'hammerjs';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TeacherSignupComponent } from './teacher-signup/teacher-signup.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CollegesComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    NotesComponent,
    QpapersComponent,
    HomepageComponent,
    EmployeesComponent,
    MainNavComponent,
    StudentDetailComponent,
    CollegeDetailComponent,
    EmployeeDetailComponent,
    TeacherSignupComponent,
    StudentSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ CollegeDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
