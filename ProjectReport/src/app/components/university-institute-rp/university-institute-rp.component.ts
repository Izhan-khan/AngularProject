import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-university-institute-rp',
  templateUrl: './university-institute-rp.component.html',
  styleUrls: ['./university-institute-rp.component.css']
})
export class UniversityInstituteRpComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChartUIRP", {
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
