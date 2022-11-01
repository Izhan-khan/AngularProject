import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-university-rp',
  templateUrl: './university-rp.component.html',
  styleUrls: ['./university-rp.component.css']
})
export class UniversityRpComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChartURP", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "Patent Publish",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "Average Earning",
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
