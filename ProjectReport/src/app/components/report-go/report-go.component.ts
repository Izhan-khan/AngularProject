import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-report-go',
  templateUrl: './report-go.component.html',
  styleUrls: ['./report-go.component.css']
})
export class ReportGoComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChartGO", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "UG",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "PG",
            data: ['467','576', '572'],
            backgroundColor: 'red'
          },
          {
            label: "Phd",
            data: ['542', '542', '536'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}
