import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})

export class FinanceComponent implements OnInit {
  public chart: any;

  @Output() disabledReport: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private router :Router) { 
  }

  ngOnInit(): void {
    //this.createChart();
  }
 
  

  saveNsubmit(){
      // this.activateReport = true;  

      this.disabledReport.emit(false);
   }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2020-21', '2019-20', '2018-19', ], 
	       datasets: [
          {
            label: "Region Diversity",
            data: ['467','576', '572'],
            backgroundColor: 'blue'
          },
          {
            label: "Women Diversity",
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
