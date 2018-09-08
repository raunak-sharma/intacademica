import { Component, OnInit, Input, Inject, ViewChildren } from '@angular/core';
import { Student } from '../shared/student';
import { StudentDataService } from '../student-data.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Chart } from 'chart.js';
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

  @ViewChildren('lineChart') private chartRef;
  LineChart=[];

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("The id is " + this.id);

    this.student = this.studentdataservice.getStudent(this.id);

    this.LineChart = new Chart('lineChart', {
        type: 'line',
        lineDashType: "dash",
        data: {
          labels : ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
          datasets: [
            {
              borderColor: "blue",
              label: 'Semester Points',
              data : this.student.marks,
              fill: false,
              lineTension: 0.2,
              borderWidth: 1
            },
            {
              borderDash: [10,5],
              label: 'Predicted Semester Points',
              data : this.student.marks.concat(this.student.marksPred),
              fill: true,
              lineTension: 0.2,
              borderColor: "red",
              borderWidth: 1
            }
          ]
        },

        options: {
          title: {
            text:"Line Chart",
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true,
            }],
          }
        }

    });

  }

}
