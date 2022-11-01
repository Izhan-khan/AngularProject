import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-university-institute-oi',
  templateUrl: './university-institute-oi.component.html',
  styleUrls: ['./university-institute-oi.component.css']
})
export class UniversityInstituteOiComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChartUIOI", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "Region",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "Women",
            data: ['467','576', '572'],
            backgroundColor: 'red'
          },
          {
            label: "Economically",
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
