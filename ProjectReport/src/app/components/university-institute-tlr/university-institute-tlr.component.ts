import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-university-institute-tlr',
  templateUrl: './university-institute-tlr.component.html',
  styleUrls: ['./university-institute-tlr.component.css']
})
export class UniversityInstituteTlrComponent implements OnInit {

  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChartUITLR", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "CopEx/Opex",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "Placement",
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
